import { useState } from "react";
import { Search, Ticket, Clock, AlertCircle, X } from "lucide-react";

const dummyTickets = [
  {
    id: "TKT-001",
    title: "Login issue in dashboard",
    status: "Open",
    priority: "High",
    date: "2026-06-08",
  },
  {
    id: "TKT-002",
    title: "Payment not processing",
    status: "In Progress",
    priority: "Medium",
    date: "2026-06-07",
  },
  {
    id: "TKT-003",
    title: "UI bug in sidebar",
    status: "Closed",
    priority: "Low",
    date: "2026-06-05",
  },
];

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

const MyTickets = () => {
  const [search, setSearch] = useState("");
  const [selectedTicket, setSelectedTicket] = useState(null);

  const filtered = dummyTickets.filter((t) =>
    t.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="p-6 w-full bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <Ticket className="text-orange-500" />
          My Tickets
        </h1>

        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-2.5 text-gray-400" />
          <input
            type="text"
            placeholder="Search tickets..."
            className="w-full pl-10 pr-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Ticket Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((ticket) => (
          <div
            key={ticket.id}
            className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition border border-gray-100"
          >
            {/* Top row */}
            <div className="flex justify-between items-start mb-3">
              <span className="text-sm font-semibold text-gray-500">
                {ticket.id}
              </span>

              <span
                className={`text-xs px-3 py-1 rounded-full font-medium ${
                  statusColor[ticket.status]
                }`}
              >
                {ticket.status}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              {ticket.title}
            </h2>

            {/* Info */}
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Clock size={16} />
                {ticket.date}
              </div>

              <div className="flex items-center gap-2">
                <AlertCircle
                  size={16}
                  className={priorityColor[ticket.priority]}
                />
                Priority:{" "}
                <span className={priorityColor[ticket.priority]}>
                  {ticket.priority}
                </span>
              </div>
            </div>

            {/* Footer actions */}
            <div className="mt-4 flex justify-between items-center">
              <button className="text-sm text-orange-500 hover:underline">
                View Details
              </button>

              <button
                onClick={() => setSelectedTicket(ticket)}
                className="text-sm bg-orange-500 text-white px-3 py-1 rounded-lg hover:bg-orange-600"
              >
                Open
              </button>
            </div>

            {/* MODAL */}
            {selectedTicket && (
              <div className="fixed inset-0 bg-black/10 flex items-center justify-center z-50">
                <div className="bg-white w-[90%] md:w-[500px] rounded-2xl p-6 shadow-xl relative">
                  {/* Close button */}
                  <button
                    onClick={() => setSelectedTicket(null)}
                    className="absolute top-3 right-3 text-gray-500 hover:text-black"
                  >
                    <X />
                  </button>

                  {/* Header */}
                  <h2 className="text-xl font-bold text-gray-800">
                    {selectedTicket.title}
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    {selectedTicket.id} • {selectedTicket.category}
                  </p>

                  {/* Status */}
                  <div className="mt-3">
                    <span
                      className={`text-xs px-3 py-1 rounded-full ${
                        statusColor[selectedTicket.status]
                      }`}
                    >
                      {selectedTicket.status}
                    </span>
                  </div>

                  {/* Details */}
                  <div className="mt-5 space-y-3 text-sm text-gray-700">
                    <p>
                      <strong>Description:</strong>
                      <br />
                      {selectedTicket.description}
                    </p>

                    <p className="flex items-center gap-2">
                      <Clock size={16} />
                      {selectedTicket.date}
                    </p>

                    <p>
                      <strong>Priority:</strong>{" "}
                      <span className={priorityColor[selectedTicket.priority]}>
                        {selectedTicket.priority}
                      </span>
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="mt-6 flex justify-end">
                    <button
                      onClick={() => setSelectedTicket(null)}
                      className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTickets;
