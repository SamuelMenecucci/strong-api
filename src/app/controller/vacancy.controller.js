import { db } from "../../config/db.config.js";
import vacancyModel from "../models/vacancy.model.js";

async function getVacancies(req, res) {
  const result = await vacancyModel.getVacancies();
  return res.send(result.rows);
}

async function createVacancy(req, res) {
  const result = await vacancyModel.newVacancy(req.body.vaga);

  return res.send(result.rows[0]);
}

async function searchVacancy(req, res) {
  const result = await vacancyModel.searchVacancy(req.query.filter);

  res.send(result.rows);
}

export default {
  getVacancies,
  createVacancy,
  searchVacancy,
};
