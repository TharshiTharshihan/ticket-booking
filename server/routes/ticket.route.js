import express from "express";
import * as ticketController from "../controllers/ticket.controller.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/create",  verifyToken,ticketController.createTicket);


export default router;