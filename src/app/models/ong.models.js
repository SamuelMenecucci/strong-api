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

function editOng(data) {
  const query = `
  update ong set 
    nome=$1, 
    email=$2,
    senha=$3,
    cnpj=$4,
    tel=$5,
    imagem=$6,
    descricao=$7
  
    where id = $8
  `;

  const values = [
    data.nome,
    data.email,
    data.senha,
    data.cnpj,
    data.tel,
    "teste",
    data.descricao,
    data.id,
  ];

  return db.query(query, values);
}

export default {
  createOng,
  editOng,
};
