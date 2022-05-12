import express from "express";
import sessionValidator from "../validators/session.validator.js";
import sessionController from "../app/controller/session.controller.js";
import ongValidator from "../validators/ong.validator.js";
import ongController from "../app/controller/ong.controller.js";
import multer from "../middlewares/multer.js";
const router = express.Router();

router.post("/login", sessionValidator.login, sessionController.login);

router.post("/createOng", ongValidator.validOng, ongController.createOng);

router.put(
  "/editOng",
  multer.array("file", 1),
  ongValidator.editOng,
  ongController.editOng
);

export default { router };
