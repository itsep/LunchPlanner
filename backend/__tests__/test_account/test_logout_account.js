const { mockReq, mockRes } = require('../../lib/express_mock')
const { logout } = require('../../routes/account/logout_account')

describe('account login', () => {
  it('should reset a cookie', async () => {
    const req = mockReq()
    const res = mockRes()
    await logout(req, res)
    expect(res.clearCookie.mock.calls.length).toBe(2)
  })
})
