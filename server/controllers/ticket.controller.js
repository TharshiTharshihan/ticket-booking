import * as ticketService from "../services/ticketService.js";

export const createTicket = async (req, res) => {
  try {
    const ticket = await ticketService.createTicketService({
      ...req.body,
      createdBy: req.body.userId,
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

//
export const getAllTickets = async (req, res) => {
  try {
    const tickets = await ticketService.getAllTicketsService();

    res.status(200).json({
      success: true,
      data: tickets,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//
export const getMyTickets = async (req, res) => {
  try {
    const { userId } = req.params;
    console.log("user id is : ", userId);

    const tickets = await ticketService.getMyTicketsService(userId);

    res.status(200).json({
      success: true,
      data: tickets,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//
export const getTicketById = async (req, res) => {
  try {
    const ticket = await ticketService.getTicketByIdService(req.params.id);

    if (!ticket) {
      return res.status(404).json({
        success: false,
        message: "Ticket not found",
      });
    }

    res.status(200).json({
      success: true,
      data: ticket,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateTicket = async (req, res) => {
  try {
    const ticket = await ticketService.updateTicketService(
      req.params.id,
      req.body,
    );

    if (!ticket) {
      return res.status(404).json({
        success: false,
        message: "Ticket not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Ticket updated",
      data: ticket,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteTicket = async (req, res) => {
  try {
    const ticket = await ticketService.deleteTicketService(req.params.id);

    if (!ticket) {
      return res.status(404).json({
        success: false,
        message: "Ticket not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Ticket deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
