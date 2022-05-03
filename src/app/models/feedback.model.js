import { db } from "../../config/db.config.js";

function createFeedback(data) {
  return db.query(`insert into feedbacks(ongid, feedback) values($1, $2)`, [
    data.ongId,
    data.feedback,
  ]);
}
export default {
  createFeedback,
};
