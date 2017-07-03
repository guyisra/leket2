module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING
      }
    },
    {
      classMethods: {
        // associate: (models) => {
        //   User.hasMany(models.Pickups)
        // },
      }
    }
  )
  return User
}
