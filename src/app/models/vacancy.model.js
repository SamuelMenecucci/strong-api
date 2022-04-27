import { db } from "../../config/db.config.js";

function getVacancies() {
  return db.query(
    "select *, vagas.descricao as descricaovaga from vagas left join ong on ( vagas.ongId = ong.id)"
  );
}

function newVacancy(data) {
  const query = `
  insert into vagas(titulo, descricao, tag, ongid) values ($1, $2, $3, $4)
  `;

  const values = [data.titulo, data.descricao, data.tag.toString(), data.ongId];

  console.log(data.tag.toString());

  return db.query(query, values);
}

export default {
  getVacancies,
  newVacancy,
};
