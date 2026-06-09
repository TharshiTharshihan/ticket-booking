import { useState, useEffect } from "react";
import { Search, Ticket, Clock, AlertCircle, X } from "lucide-react";
import { getMyTickets } from "../api/ticketApi";
import { getUser } from "../utils/auth";
import UserLayout from "../layouts/UserLayout";

const statusColor = {
  Open: "bg-orange-100 text-orange-600",
  "In Progress": "bg-blue-100 text-blue-600",
  Resolved: "bg-amber-100 text-amber-700",
  Closed: "bg-green-100 text-green-600",
};

const priorityColor = {
  High: "text-red-500",
  Medium: "text-yellow-500",
  Low: "text-green-500",
};

const MyTickets = () => {
  const currentUser = getUser();
  const currentUserId = currentUser?.id ?? currentUser?._id;
  const [search, setSearch] = useState("");
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        if (!currentUserId) {
          setTickets([]);
          return;
        }

        const response = await getMyTickets(currentUserId);

        setTickets(response.data.data || []);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTickets();
  }, [currentUserId]);

  const filteredTickets = tickets.filter((ticket) =>
    ticket.title.toLowerCase().includes(search.toLowerCase()),
  );

  const resolveAssignedName = (assignedTo) => {
    if (!assignedTo) {
      return "Not assigned";
    }

    if (typeof assignedTo === "object") {
      return assignedTo.name || "Assigned";
    }

    return "Assigned";
  };

  return (
    <UserLayout>
    <div className="p-6 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
          <Ticket className="text-orange-500" />
          My Tickets
        </h1>

      
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-3 text-gray-400" size={18} />

          <input
            type="text"
            placeholder="Search tickets..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-2xl p-5 shadow">
          <p className="text-slate-500">Open Tickets</p>

          <h2 className="text-3xl font-bold text-orange-500">
            {tickets.filter((t) => t.status === "Open").length}
          </h2>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow">
          <p className="text-slate-500">In Progress</p>

          <h2 className="text-3xl font-bold text-blue-500">
            {tickets.filter((t) => t.status === "In Progress").length}
          </h2>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow">
          <p className="text-slate-500">Closed</p>

          <h2 className="text-3xl font-bold text-green-500">
            {tickets.filter((t) => t.status === "Closed").length}
          </h2>
        </div>
      </div>

      {filteredTickets.length === 0 ? (
        <div className="bg-white rounded-3xl shadow p-16 text-center">
          <Ticket size={60} className="mx-auto text-orange-300" />

          <h2 className="mt-4 text-2xl font-bold text-gray-700">
            No Tickets Found
          </h2>

          <p className="text-gray-500 mt-2">
            Create your first support ticket.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredTickets.map((ticket) => (
            <div
              key={ticket._id}
              className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition"
            >
              <div className="flex justify-between items-start">
                <span className="font-bold text-orange-500">
                  {ticket.ticketNumber}
                </span>

                <span
                  className={`text-xs px-3 py-1 rounded-full font-medium ${statusColor[ticket.status] || "bg-slate-100 text-slate-600"}`}
                >
                  {ticket.status}
                </span>
              </div>

              <h2 className="text-lg font-semibold mt-4 text-gray-800">
                {ticket.title}
              </h2>

              <span className="inline-block mt-2 bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs">
                {ticket.category}
              </span>

              <div className="mt-4 space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Clock size={15} />

                  {new Date(ticket.createdAt).toLocaleDateString()}
                </div>

                <div className="flex items-center gap-2">
                  <AlertCircle
                    size={15}
                    className={priorityColor[ticket.priority]}
                  />

                  <span>Priority:</span>

                  <span className={priorityColor[ticket.priority]}>
                    {ticket.priority}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setSelectedTicket(ticket)}
                className="w-full mt-5 bg-orange-500 text-white py-2 rounded-xl hover:bg-orange-600"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      )}

      {selectedTicket && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl w-[90%] md:w-150 p-6 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedTicket(null)}
              className="absolute right-4 top-4 text-gray-500 hover:text-black"
            >
              <X />
            </button>

            <h2 className="text-2xl font-bold text-gray-800">
              {selectedTicket.title}
            </h2>

            <p className="text-orange-500 font-medium mt-1">
              {selectedTicket.ticketNumber}
            </p>

            <div className="mt-4 flex gap-3">
              <span
                className={`px-3 py-1 rounded-full text-xs ${statusColor[selectedTicket.status] || "bg-slate-100 text-slate-600"}`}
              >
                {selectedTicket.status}
              </span>

              <span className="bg-slate-100 px-3 py-1 rounded-full text-xs">
                {selectedTicket.category}
              </span>
            </div>

            <div className="mt-6 space-y-4 text-gray-700">
              <div>
                <strong>Description</strong>

                <p className="mt-2">{selectedTicket.description}</p>
              </div>

              <div>
                <strong>Created By:</strong> {selectedTicket.userName}
              </div>

              <div>
                <strong>Assigned To:</strong>{" "}
                {resolveAssignedName(selectedTicket.assignedTo)}
              </div>

              <div>
                <strong>Priority:</strong>{" "}
                <span className={priorityColor[selectedTicket.priority]}>
                  {selectedTicket.priority}
                </span>
              </div>

              <div>
                <strong>Created:</strong>{" "}
                {new Date(selectedTicket.createdAt).toLocaleString()}
              </div>

              <div className="pt-4 border-t">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Comments
                </h3>

                {selectedTicket.comments?.length ? (
                  <div className="space-y-3">
                    {selectedTicket.comments.map((comment, index) => (
                      <div
                        key={comment._id ?? index}
                        className="rounded-2xl bg-slate-50 p-4"
                      >
                        <div className="flex items-center justify-between gap-3 text-sm text-slate-500">
                          <span className="font-semibold text-slate-700">
                            {comment.createdByName}
                          </span>

                          <span>
                            {comment.createdAt
                              ? new Date(comment.createdAt).toLocaleString()
                              : ""}
                          </span>
                        </div>

                        <p className="mt-3 text-slate-700 whitespace-pre-line leading-6">
                          {comment.text}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="rounded-2xl bg-slate-50 p-4 text-slate-500">
                    No comments yet.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </UserLayout>
  );
};

export default MyTickets;
