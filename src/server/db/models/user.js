const Sequelize = require('sequelize')

const defineUser = (conn) => {
  return conn.define('user', {
    name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    }
  })
}

module.exports = { 
  defineUser
}