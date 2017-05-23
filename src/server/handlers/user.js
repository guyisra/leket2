module.exports = (req, res) => {
  setTimeout(() => {
    if (req.body.email === 'test') {
      return res.status(200).json(req.body)
    } else {
      return res.status(400).json({error: 'User not found'})
    }
  }, 500)

  // req.models.user.findAll().then(users => {
  //   res.json(users)
  // })
}