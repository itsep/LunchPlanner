const { pool } = require('../../lib/database')
const { validLength, isNumber } = require('../../lib/validation')
const { InputValidationError } = require('../../lib/error')

const minimumLength = 1
const maximumLength = 64

async function create(name, coordinates, lunchspaceId) {
  const [result] = await pool.execute('INSERT INTO location (name, coordinates, lunchspace_id) ' +
    'VALUES (?, POINT(?, ?), ?)', [name, coordinates.lat, coordinates.long, lunchspaceId])
  return result.insertId
}

async function createLocation(req, res) {
  const { coordinates } = req.body
  let { name } = req.body
  const { id } = req.lunchspace
  if (!validLength(name, maximumLength, minimumLength)) {
    throw new InputValidationError('name', 'Name must be between 1 and 64 characters long.')
  }
  name = name.trim()
  if (!isNumber(coordinates.lat) || !isNumber(coordinates.long)) {
    throw new InputValidationError('coordinates', 'Illegal coordinates.')
  }
  const locationId = await create(name, coordinates, id)
  return res.status(200).json({ locationId })
}

module.exports = {
  create,
  createLocation,
}
