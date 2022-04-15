import { db } from "../../config/db.config.js";

async function createOng(data) {
  const query = `insert into ong(
  nome, 
  email,
  senha,
  cnpj,
  tel,
  imagem,
  descricao
) values(
$1, $2, $3, $4, $5, $6, $7
) returning *  `;

  const values = [
    data.nomeOng,
    data.email,
    data.senha,
    data.cnpj,
    data.tel,
    "teste",
    data.description,
  ];

  return db.query(query, values);
}

export default {
  createOng,
};
