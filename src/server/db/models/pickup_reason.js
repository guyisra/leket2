module.exports = (sequelize, DataTypes) => {
  const FoodType = sequelize.define(
    'PickupReason',
    {
      code: {
        type: DataTypes.STRING
      },
      description: {
        type: DataTypes.STRING
      }
    },
    {
      classMethods: {}
    }
  )
  return PickupReason
}
