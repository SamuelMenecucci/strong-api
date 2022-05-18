function login(req, res) {
  req.session.ongId = req.ong.id;

  res.send(req.ong);
}

function logout(req, res) {
  req.session.destroy();

  res.send("Ok");
}

export default { login, logout };
