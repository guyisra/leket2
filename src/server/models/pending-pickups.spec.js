describe("pending-pickups", () => {

  describe("pendingpickups", () => {

    it("returns the pickups of a given user", () => { })
  })

  describe("groupBySupplier", () => {

    it('should group them by main supplier', () => {
      const groupBySupplier = require('./pending-pickups').groupBySupplier
      expect(groupBySupplier([
        {
          id: 1,
          name: 'ארומה',
          address: '1st floor',
          mainSupplier: {
            id: 1,
            name: 'עזריאלי',
          }
        },
        {
          id: 2,
          name: 'מקדונלדס',
          address: '1st floor',
          mainSupplier: {
            id: 2,
            name: 'איירפורט סיטי',
          }
        }
      ])).toEqual({
        locations: [
          {
            id: 1,
            name: 'עזריאלי',
            suppliers: [
              {
                id: 1,
                name: 'ארומה',
                address: '1st floor'
              }
            ]
          },
          {
            id: 2,
            name: 'איירפורט סיטי',
            suppliers: [
              {
                id: 2,
                name: 'מקדונלדס',
                address: '1st floor'
              }
            ]
          }
        ]
      })
    })
  })
})