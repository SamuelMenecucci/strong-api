import ongModels from "../app/models/ong.models.js";

async function validOng(req, res, next) {
  try {
    const keys = Object.keys(req.body);

    for (let key of keys) {
      if (req.body[key] === "") {
        throw new Error("Preencha todos os campos!");
      }
    }

    if (req.body.cnpj.replace(/\D/g, "").length < 14) {
      throw new Error("CNPJ Inválido");
    }

    if (req.body.tel.replace(/\D/g, "").length < 11) {
      throw new Error("Telefone Inválido");
    }

    const ong = await ongModels.checkUserExists(req.body);

    if (ong) throw new Error("Usuário já cadastrado!");

    next();
  } catch (err) {
    next(err);
  }
}

export default {
  validOng,
};
