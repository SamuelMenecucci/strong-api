import { db } from "../../config/db.config.js";
import vacancyModel from "../models/vacancy.model.js";

async function getVacancies(req, res) {
  const result = await vacancyModel.getVacancies();
  return res.send(result.rows);
}

async function getOngVacancies(req, res, next) {
  try {
    const { ongId } = req.session;

    const result = await vacancyModel.getOngVacancies(ongId);

    res.send(result.rows);
  } catch (err) {
    next(err);
  }
}

async function createVacancy(req, res) {
  const result = await vacancyModel.newVacancy(req.body.vaga);

  return res.send(result.rows[0]);
}

async function searchVacancy(req, res) {
  const result = await vacancyModel.searchVacancy(req.query.filter);

  res.send(result.rows);
}

async function editVacancy(req, res) {
  let { titulo, descricao, tags, id } = req.body;

  const result = await vacancyModel.editVacancy({
    titulo,
    descricao,
    tags,
    id,
  });

  res.send(result.rows);
}

async function deleteVacancy(req, res) {
  try {
    const result = await vacancyModel.deleteVacancy(req.params.id);

    res.send(result.rows[0]);
  } catch (err) {
    next(err);
  }
}

export default {
  getVacancies,
  createVacancy,
  searchVacancy,
  getOngVacancies,
  editVacancy,
  deleteVacancy,
};
