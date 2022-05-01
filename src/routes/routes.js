import express from "express";

import ongController from "../app/controller/ong.controller.js";
import vacancyController from "../app/controller/vacancy.controller.js";
import multer from "../middlewares/multer.js";
import ongValidator from "../validators/ong.validator.js";

export const router = express.Router();

router.post("/createOng", ongValidator.validOng, ongController.createOng);
router.put("/editOng", multer.array("file", 1), ongController.editOng);

router.get("/getVacancies", vacancyController.getVacancies);
router.post("/newVacancy", vacancyController.createVacancy);

router.get("/searchVacancy", vacancyController.searchVacancy);

router.get("/ongVacancies/:id", vacancyController.getOngVacancies);

router.put("/editVacancy", vacancyController.editVacancy);

router.delete("/deleteVacancy/:id", vacancyController.deleteVacancy);

router.use((err, req, res, next) => {
  res.status(400).send(err.message);
});
