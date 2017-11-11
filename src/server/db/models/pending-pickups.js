module.exports = (sequelize, DataTypes) => sequelize.define(
  'PendingPickups',
  {
      id: DataTypes.STRING,    
      supplierId: DataTypes.STRING,
      userId: DataTypes.STRING
  }
)