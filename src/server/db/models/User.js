module.exports = (sequelize, DataTypes) => sequelize.define(
  'User',
  {
    pid: {
      type: DataTypes.STRING,
      unique: true
    },
    phone: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING
  }
)