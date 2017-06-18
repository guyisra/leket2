module.exports = (sequelize, DataTypes) => {
  const FoodType = sequelize.define(
    'FoodType',
    {
      priority_id: {
        type: DataTypes.STRING
      },
      name: {
        type: DataTypes.STRING
      }
    },
    {
      classMethods: {}
    }
  )
  return FoodType
}
