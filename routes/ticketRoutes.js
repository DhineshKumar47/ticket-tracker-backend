import express from "express";
import { createTicket, getTickets, updateTicketStatus, deleteTicket } from "../controllers/ticketController.js";

const router = express.Router();

router.post("/", createTicket);
router.get("/", getTickets);
router.patch("/:id", updateTicketStatus);
router.delete("/:id", deleteTicket);

export default router;
