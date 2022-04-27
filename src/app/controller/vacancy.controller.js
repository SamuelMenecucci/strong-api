import vacancyModel from "../models/vacancy.model.js";

async function getVacancies(req, res) {
  const result = await vacancyModel.getVacancies();
  console.log(result.rows);
  return res.send(result.rows);
}

async function createVacancy(req, res) {
  const result = await vacancyModel.newVacancy(req.body.vaga);

  return res.send(result.rows[0]);
}

export default {
  getVacancies,
  createVacancy,
};
