import express from "express";
import cors from "cors";
import { router } from "./routes/routes.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(router);

app.listen(5001, () => console.log("server is running"));
