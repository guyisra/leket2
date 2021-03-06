const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const basename = path.basename(module.filename)
const env = process.env.NODE_ENV || 'development'
const config = require(`${__dirname}/../config.json`)[env]

const configSequelize = () => {
  let sequelize
  if (config.use_env_variable) {
    // only Heroku will need this (but you can set an env var in your shell for similar behavior)
    sequelize = new Sequelize(process.env[config.use_env_variable])
  } else {
    sequelize = new Sequelize(
      config.database,
      config.username,
      config.password,
      config
    )
  }
  return sequelize
}

const addModelsToSequelize = (sequelize) => {
  fs
    .readdirSync(__dirname)
    .filter(
      file =>
        file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    )
    .forEach(file => {
      sequelize.import(path.join(__dirname, file))
    })
}

const setupModelAssociations = ({models}) => {
  models.PendingPickup.belongsTo(models.User, {foreignKey: 'userId', targetKey: 'pid'})
  models.PendingPickup.belongsTo(models.Supplier, {foreignKey: 'supplierId', targetKey: 'pid'})
  models.Supplier.belongsTo(models.Location, {foreignKey: 'locationId', targetKey: 'pid'})
}

const sequelize = configSequelize()
addModelsToSequelize(sequelize)
setupModelAssociations(sequelize)

module.exports = {
  sequelize,
  Sequelize
}
