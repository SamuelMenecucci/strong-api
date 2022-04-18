import ongModels from "../models/ong.models.js";
import fs from "fs";

async function createOng(req, res) {
  try {
    const ong = req.body;

    const result = await ongModels.createOng(ong);

    res.send(result.rows[0]);
  } catch (err) {
    throw new Error(err);
  }
}

async function editOng(req, res) {
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
        : "",
    };

    const result = await ongModels.editOng(editOng);

    res.send(result.rows[0]);
  } catch (err) {
    throw new Error(err);
  }
}

export default {
  createOng,
  editOng,
};
