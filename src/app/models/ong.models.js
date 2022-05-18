import { db } from "../../config/db.config.js";
import bcrypt from "bcrypt";

const { hash } = bcrypt;

//buscar por um usuário no banco, para ver se ele existe ou não
async function findOne(filters) {
  let query = "select * from ong";

  Object.keys(filters).map((key) => {
    query = `${query}
    ${key}
    `;

    Object.keys(filters[key]).map((field) => {
      query = `${query} ${field} = '${filters[key][field]}'`;
    });
  });

  const results = await db.query(query);

  return results.rows[0];
}

async function checkUserExists(data) {
  const query = `
  select * from ong where (nome = $1) or (cnpj = $2) or (email = $3) 
  `;

  const values = [data.nomeOng.trim(), data.cnpj, data.email];

  const results = await db.query(query, values);

  return results.rows[0];
}

async function createOng(data) {
  const passwordHash = await hash(data.senha, 8);
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
    passwordHash,
    data.cnpj,
    data.tel,
    "",
    data.description,
  ];

  return db.query(query, values);
}

function editOng(data) {
  const query = `
  update ong set 
    nome=$1, 
    email=$2,
    cnpj=$3,
    tel=$4,
    imagem=$5,
    descricao=$6
    where id = $7
    
    returning *`;

  const values = [
    data.nome,
    data.email,
    data.cnpj,
    data.tel,
    data.imagem,
    data.descricao,
    data.id,
  ];

  return db.query(query, values);
}

function oldPicture(id) {
  return db.query("select imagem from ong where id = $1", [id]);
}

export default {
  checkUserExists,
  createOng,
  editOng,
  oldPicture,
  findOne,
};
