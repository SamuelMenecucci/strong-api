import { db } from "../../config/db.config.js";

async function createOng(data) {
  const query = `insert into ong(
  nome, 
  email,
  cnpj,
  tel,
  imagem,
  descricao
) values(
$1, $2, $3, $4, $5, $6
) `;

  const values = [
    data.nomeOng,
    data.email,
    data.cnpj,
    data.tel,
    "teste",
    data.description,
  ];

  // console.log(data);

  return db.query(query, values);
}

export default {
  createOng,
};
