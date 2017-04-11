const status = '../../../../server/handlers/status.js'

test('handlers / status', () => {
  let req, res
  beforeEach(() => {
    res = {
      send: jest.fn()
    }
  })

  it('returns "ok"', () => {
    res.send.mockClear()

    status(req, res)

    expect(res.send).toHaveBeenCalledTimes(1)
    expect(res.send).toHaveBeenCalledWith("Ok")
  })
})