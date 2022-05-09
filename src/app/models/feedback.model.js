import { db } from "../../config/db.config.js";

function getFeedbacks() {
  return db.query(
    "select feedbacks.*, ong.nome, ong.imagem from feedbacks left join ong on (feedbacks.ongid = ong.id)  "
  );
}

function createFeedback(data) {
  return db.query(`insert into feedbacks(ongid, feedback) values($1, $2)`, [
    data.ongId,
    data.feedback,
  ]);
}
export default {
  createFeedback,
  getFeedbacks,
};
