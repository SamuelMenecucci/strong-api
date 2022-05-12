import express from "express";
import feedbackController from "../app/controller/feedback.controller.js";
import ongs from "./ongs.js";

import ongController from "../app/controller/ong.controller.js";
import vacancyController from "../app/controller/vacancy.controller.js";
import multer from "../middlewares/multer.js";
import ongValidator from "../validators/ong.validator.js";
import sessionValidator from "../validators/session.validator.js";
import sessionController from "../app/controller/session.controller.js";

export const router = express.Router();

router.use("/ongs", ongs.router);

router.get("/getVacancies", vacancyController.getVacancies);
router.post("/newVacancy", vacancyController.createVacancy);

router.get("/searchVacancy", vacancyController.searchVacancy);

router.get("/ongVacancies/:id", vacancyController.getOngVacancies);

router.put("/editVacancy", vacancyController.editVacancy);

router.delete("/deleteVacancy/:id", vacancyController.deleteVacancy);

router.use((err, req, res, next) => {
  res.status(400).send(err.message);
});

router.get("/getFeedbacks", feedbackController.getFeedbacks);
router.post("/newFeedback", feedbackController.createFeedback);
