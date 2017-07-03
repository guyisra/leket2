module.exports = (sequelize, DataTypes) => {
  const Pickup = sequelize.define(
    'Pickup',
    {
        priority_id: {
            type: DataTypes.STRING
        }
    },
    {
      classMethods: {
        associate: (models) => {
          Pickup.belongsToMany(models.Supplier)
        },
      }
    }
  )
  return Pickup
}
