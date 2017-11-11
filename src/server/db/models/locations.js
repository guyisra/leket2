module.exports = (sequelize, DataTypes) => sequelize.define(
  'Locations',
  {
    id: DataTypes.STRING,
    name: DataTypes.STRING
  }
)