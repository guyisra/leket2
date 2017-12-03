
module.exports = {
  toErrorResponse: ({error, code}) => {
    if (error) return {
      error: {
        code: error.code,
        message: error.message
        // DONT copy `.stack` 🙊
      }
    }

    if (code) return {
      error: {
        code
      }
    }
  }
}