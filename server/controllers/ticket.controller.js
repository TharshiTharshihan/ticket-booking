import * as ticketService
from "../services/ticketService.js";



export const createTicket = async (req, res) => {
  try {

    const ticket =
      await ticketService.createTicketService({
        ...req.body,
        createdBy: req.user.id,
      });

    res.status(201).json({
      success: true,
      message: "Ticket created",
      data: ticket,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};