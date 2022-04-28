import { db } from "../../config/db.config.js";

function getVacancies() {
  return db.query(
    "select *, vagas.descricao as descricaovaga, vagas.id as vagaId from vagas left join ong on ( vagas.ongId = ong.id)"
  );
}

function getOngVacancies(ongId) {
  return db.query(
    "select *, vagas.descricao as descricaovaga, vagas.id as vagaId from vagas left join ong on ( vagas.ongId = ong.id) where ongid = $1 ",
    [ongId]
  );
}

function newVacancy(data) {
  const query = `
  insert into vagas(titulo, descricao, tag, ongid) values ($1, $2, $3, $4)
  `;

  const values = [data.titulo, data.descricao, data.tag.toString(), data.ongId];

  return db.query(query, values);
}

function searchVacancy(filter) {
  return db.query(
    `select * from vagas where (titulo ilike '%${filter}%') or (tag ilike '%${filter}%') `
  );
}

function editVacancy(data) {
  return db.query(
    `update vagas set titulo = $1, descricao = $2, tag = $3 where id = $4`,
    [data.titulo, data.descricao, data.tags.toString(), data.id]
  );
}

async function deleteVacancy(id) {
  return db.query("delete from vagas where id = $1", [id]);
}

export default {
  getVacancies,
  newVacancy,
  searchVacancy,
  getOngVacancies,
  editVacancy,
  deleteVacancy,
};
