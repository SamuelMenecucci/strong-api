import ongModels from "../models/ong.models.js";

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
    const editOng = req.body.data;

    console.log(editOng);
  } catch (err) {
    throw new Error(err);
  }
}

export default {
  createOng,
  editOng,
};
