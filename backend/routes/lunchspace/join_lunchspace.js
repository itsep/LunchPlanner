const { connect } = require('./create_lunchspace.js')
const { pool } = require('../../lib/database')
const { checkTokenAndGetLunchspaceId } = require('./check_invitation')

async function invalidateToken(token) {
  await pool.execute('DELETE FROM invitation WHERE token = ?', [token])
}

async function joinLunchspace(req, res) {
  const { userId } = req.token
  const { token } = req.query
  const { wantsToJoin } = req.body
  const lunchspaceId = await checkTokenAndGetLunchspaceId(token)
  if (lunchspaceId) {
    const promiseArray = [invalidateToken(token)]
    if (wantsToJoin) {
      promiseArray.push(connect(userId, lunchspaceId, false))
    }
    await Promise.all(promiseArray)
  }
  res.status(200).json({})
}

module.exports = {
  joinLunchspace,
  invalidateToken,
}
