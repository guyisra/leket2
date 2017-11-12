module.exports = (sequelize, DataTypes) => sequelize.define(
  'Location',
  {
    pid: {
      type: DataTypes.STRING,
      unique: true
    },
    name: DataTypes.STRING,
    address: DataTypes.STRING
  }
)