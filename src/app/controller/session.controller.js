function login(req, res) {
  req.session.ongId = req.ong.id;

  res.send(req.ong);
}

export default { login };
