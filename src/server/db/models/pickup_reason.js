module.exports = (sequelize, DataTypes) => {
  const PickupReason = sequelize.define(
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
