import express from "express";

import ongController from "../app/controller/ong.controller.js";
import vacancyController from "../app/controller/vacancy.controller.js";
import multer from "../middlewares/multer.js";

export const router = express.Router();

router.post("/createOng", ongController.createOng);
router.put("/editOng", multer.array("file", 1), ongController.editOng);

router.get("/getVacancies", vacancyController.getVacancies);
router.post("/newVacancy", vacancyController.createVacancy);
