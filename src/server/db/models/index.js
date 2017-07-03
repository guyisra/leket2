const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const basename = path.basename(module.filename)
const env = process.env.NODE_ENV || 'development'
const config = require(`${__dirname}/../config.json`)[env]
const db = {}

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
      const model = sequelize.import(path.join(__dirname, file))
      db[model.name] = model
    })
}

const setupModelAssociations = () => {
  Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
      db[modelName].associate(db)
    }
  })
}

db.sequelize = configSequelize()
addModelsToSequelize(db.sequelize)
setupModelAssociations()

db.Sequelize = Sequelize

module.exports = db
