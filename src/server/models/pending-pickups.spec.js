const db = require('node-pg')
const { pendingPickups, groupBySupplier } = require('./pending-pickups')(db)

describe("pending-pickups", () => {
  describe("pendingpickups", () => {
    it("returns the pickups of a given user", () => {
      expect(pendingPickups('test')).toEqual([
        {
          id: 1,
          name: 'ארומה',
          address: '1st floor',
          locationId: 1,
          locationName: 'עזריאלי',
        },
        {
          id: 2,
          name: 'מקדונלדס',
          address: '1st floor',
          locationId: 2,
          locationName: 'איירפורט סיטי',
        }
      ])
    })
  })

  describe("groupBySupplier", () => {

    it('should group them by main supplier', () => {
      expect(groupBySupplier([
        {
          id: 1,
          name: 'ארומה',
          address: '1st floor',
          locationId: 1,
          locationName: 'עזריאלי',
        },
        {
          id: 2,
          name: 'מקדונלדס',
          address: '1st floor',
          locationId: 2,
          locationName: 'איירפורט סיטי',
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