//import React from 'react'
import { getUser } from "../utils/auth";

function Dashboard() {
  const user = getUser();
  return (
    <div className="text-3xl font-bold text-center mt-20">
      Dashboard
      <h1 className="text-2xl mt-4">Welcome {user?.name}</h1>
      <h2 className="text-xl mt-2 text-gray-600">Role : {user?.role}</h2>
      {user?.role === "admin" && (
        <>
          <button>Manage Users</button>
          <button>All Tickets</button>
          <button>Reports</button>
        </>
      )}
      {user?.role === "agent" && (
        <>
          <button>Assigned Tickets</button>
          <button>Update Status</button>
        </>
      )}
      {user?.role === "user" && (
        <>
          <button>Create Ticket</button>
          <button>My Tickets</button>
        </>
      )}
    </div>
  );
}

export default Dashboard;
