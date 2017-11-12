module.exports = (sequelize, DataTypes) => sequelize.define(
  'PendingPickup',
  {
    pid: DataTypes.STRING,    
    supplierId: DataTypes.STRING,
    userId: DataTypes.STRING
  }
)