import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

export const db = new pg.Pool({
  user: process.env.USER,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.PORT,
  database: process.env.DATABASE,
});
