import express from "express";

import ongController from "../app/controller/ong.controller.js";

export const router = express.Router();

router.post("/createOng", ongController.createOng);
