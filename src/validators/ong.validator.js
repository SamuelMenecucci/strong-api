import ongModels from "../app/models/ong.models.js";

function checkAllFields(fields) {
  const keys = Object.keys(fields);

  for (let key of keys) {
    if (fields[key] === "") {
      throw new Error("Preencha todos os campos!");
    }
  }
}

async function getUser(req, res, next) {
  try {
    const { ongId } = req.session;

    const ong = await ongModels.findOne({ where: { id: ongId } });

    req.ong = ong;

    next();
  } catch (err) {
    next(err);
  }
}

async function validOng(req, res, next) {
  try {
    const fields = req.body.ong || req.body;

    checkAllFields(fields);

    const { email, cnpj, nome } = fields;

    if (fields.cnpj.replace(/\D/g, "").length < 14) {
      throw new Error("CNPJ Inválido");
    }

    if (fields.tel.replace(/\D/g, "").length < 11) {
      throw new Error("Telefone Inválido");
    }

    const ong = await ongModels.findOne({
      where: { email },
      or: { cnpj },
      or: { nome },
    });

    if (ong) throw new Error("Usuário já cadastrado!");

    req.ong = req.body;

    next();
  } catch (err) {
    next(err);
  }
}

async function editOng(req, res, next) {
  try {
    const fields = JSON.parse(req.body.ong) || req.body;

    checkAllFields(fields);

    const ong = await ongModels.findOne({
      where: {
        id: fields.id,
      },
    });

    if (fields.tel.replace(/\D/g, "").length < 11) {
      throw new Error("Telefone Inválido");
    }

    req.ong = ong;

    next();
  } catch (err) {
    next(err);
  }
}

export default {
  validOng,
  editOng,
  getUser,
};
