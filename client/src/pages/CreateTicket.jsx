import { useState } from "react";
import UserLayout from "../layouts/UserLayout";

const CreateTicket = () => {
  const [ticket, setTicket] = useState({
    category: "",
    priority: "",
    title: "",
    description: "",
  });

  return (
    <UserLayout>
      <div className="bg-white p-8 rounded-3xl shadow">

        <h1 className="text-3xl font-bold mb-6">
          Create Ticket
        </h1>

        <form className="space-y-4">

          <select
            className="w-full border p-4 rounded-xl"
          >
            <option>Category</option>
            <option>Payment Issue</option>
            <option>Account Issue</option>
            <option>Technical Issue</option>
          </select>

          <select
            className="w-full border p-4 rounded-xl"
          >
            <option>Priority</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>

          <input
            type="text"
            placeholder="Title"
            className="w-full border p-4 rounded-xl"
          />

          <textarea
            rows="6"
            placeholder="Describe your issue"
            className="w-full border p-4 rounded-xl"
          />

          <button
            className="bg-orange-500 text-white px-8 py-4 rounded-xl"
          >
            Submit Ticket
          </button>

        </form>
      </div>
    </UserLayout>
  );
};

export default CreateTicket;