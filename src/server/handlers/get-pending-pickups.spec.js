const getPendingPickups = require('./get-pending-pickups')

const mockResponse = {}

const pendingPickups = jest.fn(() => ({
  groupBy: jest.fn(() => mockResponse)
}))

const res = {
  json: jest.fn()
}

describe('get-pending-pickups', () => {
  it('should retrieve pending pickups and group them', () => {
    const req = {
      userId: '123'
    }

    getPendingPickups({pendingPickups})(req, res)

    expect(res.json).toHaveBeenCalledWith(mockResponse)
  })
})