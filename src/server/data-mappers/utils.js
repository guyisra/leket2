const {isEmpty, trim} = require('lodash')

module.exports = {
  rejectEmpty: (value, errorCode) => {
    if (isEmpty(trim(value))) {
      const error = new Error('Value not allowed to be empty')
      error.code = errorCode
      throw error
    }
  }
}