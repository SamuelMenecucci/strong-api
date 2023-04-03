import express from "express";
import cors from "cors";
import { router } from "./routes/routes.js";
import session from "./config/session.config.js";

const app = express();

const PORT = process.env.PORT || 5001;

app.use(
  cors({
    origin: ["http://localhost:3000", "https://strong-volunter.vercel.app"],
    methods: ["GET,HEAD,PUT,POST,DELETE"],
    credentials: true,
  })
);

app.use(session);
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
