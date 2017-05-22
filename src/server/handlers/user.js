module.exports = (req, res) => {
  req.models.user.findAll().then(users => {
    res.json(users)
  })
}