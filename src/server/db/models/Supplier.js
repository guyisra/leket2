module.exports = (sequelize, DataTypes) => sequelize.define(
  'Supplier',
  {
    pid: {
      type: DataTypes.STRING,
      unique: true
    },
    name: DataTypes.STRING,
    locationId: DataTypes.STRING
  }
)