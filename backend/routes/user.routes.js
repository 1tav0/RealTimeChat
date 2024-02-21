import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { getUsersForSidebar } from "../controllers/user.controller.js";
const router = express.Router();

router.route("/").get(authMiddleware, getUsersForSidebar);

export default router;