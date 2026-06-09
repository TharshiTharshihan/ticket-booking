import { useEffect, useState } from "react";
import { AlertCircle, Clock, Search, Ticket, User, X } from "lucide-react";
import UserLayout from "../layouts/UserLayout";
import { getAllTickets } from "../api/ticketApi";

const statusColor = {
  Open: "bg-orange-100 text-orange-600",
  "In Progress": "bg-blue-100 text-blue-600",
  Closed: "bg-green-100 text-green-600",
};

const priorityColor = {
  High: "text-red-500",
  Medium: "text-yellow-500",
  Low: "text-green-500",
};

const AllTickets = () => {
  const [search, setSearch] = useState("");
  const [tickets, setTickets] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await getAllTickets();
        setTickets(response.data.data || []);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to load tickets");
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, []);

  const filteredTickets = tickets.filter((ticket) => {
    const query = search.toLowerCase();

    return (
      ticket.title?.toLowerCase().includes(query) ||
      ticket.ticketNumber?.toLowerCase().includes(query) ||
      ticket.category?.toLowerCase().includes(query) ||
      ticket.userName?.toLowerCase().includes(query)
    );
  });

  const openCount = tickets.filter((ticket) => ticket.status === "Open").length;
  const progressCount = tickets.filter(
    (ticket) => ticket.status === "In Progress",
  ).length;
  const closedCount = tickets.filter(
    (ticket) => ticket.status === "Closed",
  ).length;

  return (
    <UserLayout>
      <div className="space-y-6">
        <div className="bg-linear-to-r from-orange-500 to-orange-600 rounded-3xl p-8 text-white shadow-lg">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <div className="flex items-center gap-3">
                <Ticket size={36} />
                <h1 className="text-4xl font-bold">All Tickets</h1>
              </div>
              <p className="mt-3 text-orange-100 max-w-2xl">
                Review every ticket stored in the database, track status, and
                inspect the full request details.
              </p>
            </div>

            <div className="relative w-full lg:w-96">
              <Search
                className="absolute left-4 top-4 text-orange-200"
                size={20}
              />
              <input
                type="text"
                placeholder="Search by ticket number, title, category, or requester"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-orange-100 focus:outline-none focus:ring-2 focus:ring-white/70"
              />
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="bg-white rounded-2xl p-5 shadow">
            <p className="text-slate-500">Open Tickets</p>
            <h2 className="text-3xl font-bold text-orange-500">{openCount}</h2>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow">
            <p className="text-slate-500">In Progress</p>
            <h2 className="text-3xl font-bold text-blue-500">
              {progressCount}
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow">
            <p className="text-slate-500">Closed</p>
            <h2 className="text-3xl font-bold text-green-500">{closedCount}</h2>
          </div>
        </div>

        {loading ? (
          <div className="bg-white rounded-3xl shadow p-12 text-center text-slate-500">
            Loading tickets...
          </div>
        ) : error ? (
          <div className="bg-white rounded-3xl shadow p-12 text-center">
            <AlertCircle className="mx-auto text-red-400" size={56} />
            <h2 className="mt-4 text-2xl font-bold text-slate-700">
              Could not load tickets
            </h2>
            <p className="mt-2 text-slate-500">{error}</p>
          </div>
        ) : filteredTickets.length === 0 ? (
          <div className="bg-white rounded-3xl shadow p-16 text-center">
            <Ticket size={60} className="mx-auto text-orange-300" />
            <h2 className="mt-4 text-2xl font-bold text-gray-700">
              No Tickets Found
            </h2>
            <p className="text-gray-500 mt-2">
              {search
                ? "Try a different search term."
                : "There are no tickets saved in the database yet."}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {filteredTickets.map((ticket) => (
              <div
                key={ticket._id}
                className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-shadow duration-200"
              >
                <div className="flex justify-between items-start gap-3">
                  <div>
                    <span className="font-bold text-orange-500">
                      {ticket.ticketNumber}
                    </span>
                    <h2 className="text-lg font-semibold mt-3 text-gray-800 line-clamp-2">
                      {ticket.title}
                    </h2>
                  </div>

                  <span
                    className={`text-xs px-3 py-1 rounded-full font-medium ${statusColor[ticket.status] || "bg-slate-100 text-slate-600"}`}
                  >
                    {ticket.status}
                  </span>
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="inline-block bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs">
                    {ticket.category}
                  </span>
                  <span className="inline-block bg-orange-50 text-orange-600 px-3 py-1 rounded-full text-xs">
                    {ticket.userName}
                  </span>
                </div>

                <div className="mt-4 space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Clock size={15} />
                    {ticket.createdAt
                      ? new Date(ticket.createdAt).toLocaleDateString()
                      : "Unknown date"}
                  </div>

                  <div className="flex items-center gap-2">
                    <User size={15} />
                    <span className="truncate">{ticket.userName}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <AlertCircle
                      size={15}
                      className={
                        priorityColor[ticket.priority] || "text-slate-400"
                      }
                    />
                    <span>Priority:</span>
                    <span
                      className={
                        priorityColor[ticket.priority] || "text-slate-500"
                      }
                    >
                      {ticket.priority}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedTicket(ticket)}
                  className="w-full mt-5 bg-orange-500 text-white py-2 rounded-xl hover:bg-orange-600 transition-colors"
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        )}

        {selectedTicket && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl w-full max-w-2xl p-6 relative max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setSelectedTicket(null)}
                className="absolute top-4 right-4 text-slate-500 hover:text-slate-800"
              >
                <X size={22} />
              </button>

              <div className="pr-8">
                <p className="text-orange-500 font-semibold">
                  {selectedTicket.ticketNumber}
                </p>
                <h2 className="text-2xl font-bold text-slate-800 mt-2">
                  {selectedTicket.title}
                </h2>
                <p className="text-slate-500 mt-2">{selectedTicket.category}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">Status</p>
                  <p
                    className={`mt-1 font-semibold ${statusColor[selectedTicket.status] || "text-slate-700"}`}
                  >
                    {selectedTicket.status}
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">Priority</p>
                  <p
                    className={`mt-1 font-semibold ${priorityColor[selectedTicket.priority] || "text-slate-700"}`}
                  >
                    {selectedTicket.priority}
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">Requester</p>
                  <p className="mt-1 font-semibold text-slate-800">
                    {selectedTicket.userName}
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">Created On</p>
                  <p className="mt-1 font-semibold text-slate-800">
                    {selectedTicket.createdAt
                      ? new Date(selectedTicket.createdAt).toLocaleString()
                      : "Unknown"}
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-sm text-slate-500 mb-2">Description</p>
                <div className="rounded-2xl bg-slate-50 p-4 text-slate-700 whitespace-pre-line leading-6">
                  {selectedTicket.description}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </UserLayout>
  );
};

export default AllTickets;
