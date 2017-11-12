module.exports = (sequelize, DataTypes) => sequelize.define(
  'User',
  {
    id: {
      type: DataTypes.STRING,
      unique: true
    },
    phone: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING
  }
)