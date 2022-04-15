import ongModels from "../models/ong.models.js";

async function createOng(req, res) {
  const ong = req.body;

  const result = await ongModels.createOng(ong);

  //   console.log(result.rows[0]);
}

export default {
  createOng,
};
