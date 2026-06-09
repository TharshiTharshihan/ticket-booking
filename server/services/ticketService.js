import Ticket from "../models/ticket.model.js";

// Create Ticket
export const createTicketService = async (ticketData) => {
  const lastTicket = await Ticket.findOne().sort({
    createdAt: -1,
  });

  let nextNumber = 1;

  if (lastTicket) {
    nextNumber =
      parseInt(lastTicket.ticketNumber.split("-")[1]) + 1;
  }

  const ticketNumber = `TKT-${String(nextNumber).padStart(4, "0")}`;

  return await Ticket.create({
    ...ticketData,
    ticketNumber,
  });
};

// Get Logged-in User Tickets
export const getMyTicketsService = async (userId) => {
  return await Ticket.find({ userId }).sort({
    createdAt: -1,
  });
};

// Get All Tickets (Admin)
export const getAllTicketsService = async () => {
  return await Ticket.find().sort({
    createdAt: -1,
  });
};

// Update Ticket
export const updateTicketService = async (
  ticketId,
  data
) => {
  return await Ticket.findByIdAndUpdate(
    ticketId,
    data,
    {
      new: true,
      runValidators: true,
    }
  );
};

// Delete Ticket
export const deleteTicketService = async (
  ticketId
) => {
  return await Ticket.findByIdAndDelete(ticketId);
};