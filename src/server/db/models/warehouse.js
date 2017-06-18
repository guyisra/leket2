module.exports = (sequelize, DataTypes) => {
  const Warehouse = sequelize.define(
    'Warehouse',
    {
      priority_id: {
        type: DataTypes.STRING
      },
      name: {
        type: DataTypes.STRING
      },
      address: {
        type: DataTypes.STRING
      },
      city: {
        type: DataTypes.STRING
      }
    },
    {
      classMethods: {}
    }
  )
  return Warehouse
}
