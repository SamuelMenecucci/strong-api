import express from "express";

import ongController from "../app/controller/ong.controller.js";
import multer from "../middlewares/multer.js";

export const router = express.Router();

router.post("/createOng", ongController.createOng);
router.put("/editOng", multer.single("file"), ongController.editOng);
