import ongModels from "../models/ong.models.js";

async function createOng(req, res) {
  try {
    const ong = req.body;

    const result = await ongModels.createOng(ong);

    res.send(result.rows[0]);
  } catch (err) {
    res.send(err);
  }
}

export default {
  createOng,
};