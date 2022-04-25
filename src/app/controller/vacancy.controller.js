import vacancyModel from "../models/vacancy.model.js";

async function getVacancies(req, res) {
  const result = await vacancyModel.getVacancies();
  console.log(result.rows);
  return res.send(result.rows);
}

export default {
  getVacancies,
};
