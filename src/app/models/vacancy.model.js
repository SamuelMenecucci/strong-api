import { db } from "../../config/db.config.js";

function getVacancies() {
  return db.query(
    "select *, vagas.descricao as descricaovaga from vagas left join ong on ( vagas.ongId = ong.id)"
  );
}

function getOngVacancies(ongId) {
  return db.query(
    "select *, vagas.descricao as descricaovaga from vagas left join ong on ( vagas.ongId = ong.id) where ongid = $1 ",
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

export default {
  getVacancies,
  newVacancy,
  searchVacancy,
  getOngVacancies,
};
