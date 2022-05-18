import ongModels from "../models/ong.models.js";
import bcrypt from "bcrypt";
import fs from "fs";

async function getOng(req, res, next) {
  let ong = req.ong;

  res.send(ong);
}

async function createOng(req, res, next) {
  try {
    const { ong } = req;

    const result = await ongModels.createOng(ong);

    req.session.ongId = result.rows[0].id;

    res.send(result.rows[0]);
  } catch (err) {
    next(err);
  }
}

async function editOng(req, res, next) {
  try {
    let editOng = JSON.parse(req.body.ong);

    const profilePicture = req.files[0];

    // TODO  fazer as alterações para excluir a imagem anterior do usuário
    // const oldFile = await ongModels.oldPicture(editOng.id);
    // fs.unlinkSync(
    //   oldFile.rows[0].imagem.replace(
    //     `${req.protocol}://${req.headers.host}`,
    //     "public"
    //   )
    // );

    editOng = {
      ...editOng,
      imagem: profilePicture
        ? `${req.protocol}://${req.headers.host}${profilePicture.path.replace(
            "public",
            ""
          )}`
        : req.ong.imagem,
    };

    const passed = await bcrypt.compare(editOng.senha, req.ong.senha);

    if (!passed) throw new Error("Senha incorreta!");

    const result = await ongModels.editOng(editOng);

    res.send(result.rows[0]);
  } catch (err) {
    next(err);
  }
}

export default {
  createOng,
  editOng,
  getOng,
};
