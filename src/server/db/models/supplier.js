module.exports = (sequelize, DataTypes) => {
  const Supplier = sequelize.define(
    'Supplier',
    {
      priority_id: {
        type: DataTypes.STRING
      },
      name: {
        type: DataTypes.STRING
      }
    },
    {
      classMethods: {
        associate: (models) => {
          Supplier.hasMany(models.Supplier)
          Supplier.belongsToMany(models.Pickup)
        },
      }
    }
  )
  return Supplier
}
