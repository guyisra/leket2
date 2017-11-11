module.exports = (sequelize, DataTypes) => sequelize.define(
  'Suppliers',
  {
    id: DataTypes.STRING,
    name: DataTypes.STRING,
    address: DataTypes.STRING
  }
)