module.exports = (sequelize, DataTypes) => sequelize.define(
  'PendingPickup',
  {
    pid: DataTypes.STRING,    
    date: DataTypes.DATEONLY,
    userId: DataTypes.STRING,
    supplierId: DataTypes.STRING
  }
)