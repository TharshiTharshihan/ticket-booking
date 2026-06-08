import axios from "axios";

const API =
  import.meta.env.VITE_API_URL + "/tickets" ||
  "http://localhost:5000/api/tickets";

// Create Ticket
export const createTicket = (ticketData) => {
  return axios.post(
    `${API}/create`,ticketData,
    {
      withCredentials: true,
    }
  );
};

// Get Logged User Tickets
export const getMyTickets = () => {
  return axios.get(
    `${API}/tickets/my`,
    {
      withCredentials: true,
    }
  );
};

// Get Single Ticket
export const getTicketById = (ticketId) => {
  return axios.get(
    `${API}/tickets/${ticketId}`,
    {
      withCredentials: true,
    }
  );
};

// Update Ticket
export const updateTicket = (
  ticketId,
  ticketData
) => {
  return axios.put(
    `${API}/tickets/${ticketId}`,
    ticketData,
    {
      withCredentials: true,
    }
  );
};

// Delete Ticket
export const deleteTicket = (
  ticketId
) => {
  return axios.delete(
    `${API}/tickets/${ticketId}`,
    {
      withCredentials: true,
    }
  );
};