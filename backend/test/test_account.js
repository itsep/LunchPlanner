const account = require('../routes/account')
const { mockReq, mockRes } = require('sinon-express-mock')
const { pool } = require('../lib/database')

describe('account', () => {
  describe('count', () => {
    it('should return 0', async () => {
      const req = mockReq()
      const res = mockRes()
      await account.count(req, res)
      expect(res.json).to.be.calledWith({ count: 0 })
    })
    it('should return 1 after insertion', async () => {
      const user = ['dnadoba@gmail.com', 'awesome hashed password']
      await pool.execute('INSERT INTO account (account_email, account_hashed_password) VALUES (?, ?)', user)
      const req = mockReq()
      const res = mockRes()
      await account.count(req, res)
      expect(res.json).to.be.calledWith({ count: 1 })
    })
  })
  describe('create account', () => {
    it('should return no error', async () => {
      const request = { body: { email: 'niceemail@email.de', password: 'newPassword' } }
      const req = mockReq(request)
      const res = mockRes()
      await account.receiveCreateAccount(req, res)
      expect(res.json).to.be.calledWith({ error: undefined })
    })
    it('should return already registered error.', async () => {
      const request = { body: { email: 'niceemail@email.de', password: 'newPassword' } }
      const req = mockReq(request)
      const res = mockRes()
      await account.receiveCreateAccount(req, res)
      expect(res.json).to.be.calledWith({ error: 'E-Mail is already registered.' })
    })
  })
})

