import {
  LayoutDashboard,
  PlusCircle,
  Ticket,
  User,
  LogOut,
} from "lucide-react";

import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="w-64 bg-white shadow-lg flex flex-col">
      <div className="p-6 border-b">
        <h1 className="text-3xl font-bold text-orange-500">
          TicketHub
        </h1>
      </div>

      <nav className="flex-1 p-4 space-y-3">

        <Link
          to="/dashboard"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-orange-100"
        >
          <LayoutDashboard />
          Dashboard
        </Link>

        <Link
          to="/create-ticket"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-orange-100"
        >
          <PlusCircle />
          Create Ticket
        </Link>

        <Link
          to="/my-tickets"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-orange-100"
        >
          <Ticket />
          My Tickets
        </Link>

        <Link
          to="/profile"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-orange-100"
        >
          <User />
          Profile
        </Link>
      </nav>

      <button
        onClick={logout}
        className="m-4 bg-orange-500 text-white p-3 rounded-xl flex items-center justify-center gap-2"
      >
        <LogOut />
        Logout
      </button>
    </div>
  );
};

export default Sidebar;