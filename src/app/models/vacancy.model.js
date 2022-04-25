import { db } from "../../config/db.config.js";

function getVacancies() {
  return db.query(
    "select *, vagas.descricao as descricaovaga from vagas left join ong on ( vagas.ongId = ong.id)"
  );
}

export default {
  getVacancies,
};
