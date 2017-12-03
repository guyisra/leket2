module.exports = (sequelize, DataTypes) => sequelize.define(
  'Pickup',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    date: DataTypes.DATE,
    userId: DataTypes.STRING,
    supplierId: DataTypes.STRING,
    reasonId: DataTypes.STRING,
    foodId: DataTypes.STRING,
    containerId: DataTypes.STRING,
    quantity: DataTypes.INTEGER
  }
)