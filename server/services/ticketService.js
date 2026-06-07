import Ticket from "../models/ticket.model.js";


//
export const createTicketService = async (ticketData) => {

  const lastTicket = await Ticket.findOne()
    .sort({ createdAt: -1 });

  let nextNumber = 1;

  if (lastTicket) {
    nextNumber =
      parseInt(
        lastTicket.ticketNumber.split("-")[1]
      ) + 1;
  }

  const ticketNumber =
    `TKT-${String(nextNumber).padStart(4, "0")}`;

  return await Ticket.create({
    ...ticketData,
    ticketNumber,
  });
};



//
export const getMyTicketsService = async (
  userId
) => {
  return await Ticket.find({
    createdBy: userId,
  });
};


//
export const getTicketByIdService = async (
  ticketId
) => {
  return await Ticket.findById(ticketId)
    .populate("createdBy", "name email")
    .populate("assignedTo", "name email");
};


//
export const deleteTicketService = async (
  ticketId
) => {
  return await Ticket.findByIdAndDelete(
    ticketId
  );
};



//
export const updateTicketService = async (
  ticketId,
  data
) => {
  return await Ticket.findByIdAndUpdate(
    ticketId,
    data,
    { new: true }
  );
};