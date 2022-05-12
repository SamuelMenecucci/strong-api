import express from "express";
import sessionValidator from "../validators/session.validator.js";
import sessionController from "../app/controller/session.controller.js";
const router = express.Router();

router.post("/login", sessionValidator.login, sessionController.login);

export default { router };
