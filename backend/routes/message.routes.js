import express from "express";
import { sendMessage } from "../controllers/message.controller.js";
import authMiddleware from "../middleware/authMiddleware.js";
const router = express.Router();

// user that would like to send the message
router.route("/send/:id").post(authMiddleware,sendMessage);

export default router;