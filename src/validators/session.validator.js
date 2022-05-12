import bcrypt from "bcrypt";
import ongModels from "../app/models/ong.models.js";

async function login(req, res, next) {
  try {
    const { username, password } = req.body;

    const ong = await ongModels.findOne({ where: { email: username } });

    if (!ong) throw new Error("Usuário não cadastrado!");

    const passed = await bcrypt.compare(password, ong.senha);

    console.log(passed);

    if (!passed) throw new Error("Senha incorreta!");

    req.ong = ong;

    next();
  } catch (err) {
    next(err);
  }
}

export default {
  login,
};
