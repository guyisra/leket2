const {isEmail} = require('validator')

module.exports = ({User}) => async (req, res) => {
  if (!isEmail(req.body.email || '')) {
    return res.status(400).json({error: {code: 'malformed_email'}})
  }

  const user = await User.findOne({
    where: {
      email: req.body.email
    }
  })

  if (!user) {
    return res.status(404).json({error: {code: 'email_not_found'}})
  }

  res.cookie('userId', user.pid)
  return res.status(200).json(req.body)
}
