module.exports = (sequelize, DataTypes) => sequelize.define(
  'Supplier',
  {
    pid: {
      type: DataTypes.STRING,
      unique: true
    },
    name: DataTypes.STRING,
    address: DataTypes.STRING
  }
)