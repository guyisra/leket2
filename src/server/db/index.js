const Sequelize = require('sequelize')

const { defineUser } = require('./models/user')

const initializeDb = (url) => {
  const pgConn = new Sequelize(url)
  const models = {
    user: defineUser(pgConn)
  }

  return pgConn
    .authenticate()
    .then(() => {
      return models.user.sync()
    })
    .then(() => {
      console.log('db is connected and User is ready')
      return models
    })
}

module.exports = {
  initializeDb
}