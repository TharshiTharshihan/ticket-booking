import { useState } from "react";
import {
  LayoutDashboard,
  PlusCircle,
  Ticket,
  User,
  LogOut,
  Menu,
  X,
} from "lucide-react";

import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="sm:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-lg shadow-md"
      >
        <Menu size={24} />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 sm:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed sm:static top-0 left-0 h-screen rounded-3xl p-2
          w-64 bg-white shadow-lg z-50
          transform transition-transform duration-300
          ${
            isOpen
              ? "translate-x-0"
              : "-translate-x-full sm:translate-x-0"
          }
          flex flex-col
        `}
      >
        {/* Header */}
        <div className="p-6 border-b flex items-center justify-between">
          <h1 className="text-3xl font-bold text-orange-500">
            TicketHub
          </h1>

          <button
            onClick={closeSidebar}
            className="sm:hidden"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-3">
          <Link
            to="/dashboard"
            onClick={closeSidebar}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-orange-100"
          >
            <LayoutDashboard />
            Dashboard
          </Link>

          <Link
            to="/create-ticket"
            onClick={closeSidebar}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-orange-100"
          >
            <PlusCircle />
            Create Ticket
          </Link>

          <Link
            to="/my-tickets"
            onClick={closeSidebar}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-orange-100"
          >
            <Ticket />
            My Tickets
          </Link>

          <Link
            to="/profile"
            onClick={closeSidebar}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-orange-100"
          >
            <User />
            Profile
          </Link>
        </nav>

        {/* Logout */}
        <button
          onClick={logout}
          className="m-4 bg-orange-500 text-white p-3 rounded-xl flex items-center justify-center gap-2"
        >
          <LogOut />
          Logout
        </button>
      </div>
    </>
  );
};

export default Sidebar;