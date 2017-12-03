const {isEmail} = require('validator')

module.exports = ({User}) => async (req, res) => {
  if (!isEmail(req.body.email || '')) {
    return res.status(400).json({reason: 'malformed email'})
  }

  const user = await User.findOne({
    where: {
      email: req.body.email
    }
  })

  if (!user) {
    return res.status(404).json({reason: 'email not found'})
  }

  res.cookie('userId', user.pid)
  return res.status(200).json(req.body)
}
