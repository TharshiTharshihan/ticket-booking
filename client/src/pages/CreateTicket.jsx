import { useState } from "react";
import { Ticket, FileText, AlertCircle, Layers } from "lucide-react";
import UserLayout from "../layouts/UserLayout";
import { toast } from "react-toastify";
import { createTicket } from "../api/ticketApi";
import { getUser } from "../utils/auth";

const CreateTicket = () => {
  const user = getUser();
  const userId = user?.id ?? user?._id;
  const userName = user?.name;

  const [formData, setFormData] = useState({
    category: "",
    priority: "",
    title: "",
    description: "",
    userId,
    userName,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.category ||
      !formData.priority ||
      !formData.title ||
      !formData.description
    ) {
      return toast.error("Please fill all fields");
    }

    if (!userId || !userName) {
      return toast.error("User session not found. Please log in again.");
    }

    try {
      setLoading(true);

      await createTicket(formData);

      toast.success("Ticket Created Successfully",{theme:"dark"});

      setFormData({
        category: "",
        priority: "",
        title: "",
        description: "",
        userId,
        userName,
      });
      console.log("====================================");
      console.log(formData);
      console.log("====================================");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to create ticket");
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserLayout>
      <div className=" mx-auto">
        {/* Header */}

        <div className="bg-linear-to-r from-orange-500 to-orange-600 text-white rounded-3xl p-8 shadow-lg">
          <div className="flex items-center gap-4">
            <Ticket size={40} />

            <div>
              <h1 className="text-3xl font-bold">Create New Ticket</h1>

              <p className="text-orange-100 mt-1">
                Describe your issue and our support team will assist you.
              </p>
            </div>
          </div>
        </div>

        {/* Form */}

        <div className="bg-white rounded-3xl shadow-lg mt-6 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Category */}

            <div>
              <label className="font-semibold text-slate-700">Category</label>

              <div className="relative mt-2">
                <Layers
                  className="absolute left-4 top-4 text-slate-400"
                  size={20}
                />

                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full border border-slate-200 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-orange-500"
                >
                  <option value="">Select Category</option>

                  <option value="Payment Issue">Payment Issue</option>

                  <option value="Booking Issue">Booking Issue</option>

                  <option value="Refund Request">Refund Request</option>

                  <option value="Account Issue">Account Issue</option>

                  <option value="Technical Issue">Technical Issue</option>

                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Priority */}

            <div>
              <label className="font-semibold text-slate-700">Priority</label>

              <div className="relative mt-2">
                <AlertCircle
                  className="absolute left-4 top-4 text-slate-400"
                  size={20}
                />

                <select
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                  className="w-full border border-slate-200 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-orange-500"
                >
                  <option value="">Select Priority</option>

                  <option value="Low">Low</option>

                  <option value="Medium">Medium</option>

                  <option value="High">High</option>
                </select>
              </div>
            </div>

            {/* Title */}

            <div>
              <label className="font-semibold text-slate-700">Title</label>

              <div className="relative mt-2">
                <Ticket
                  className="absolute left-4 top-4 text-slate-400"
                  size={20}
                />

                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter Ticket Title"
                  className="w-full border border-slate-200 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-orange-500"
                />
              </div>
            </div>

            {/* Description */}

            <div>
              <label className="font-semibold text-slate-700">
                Description
              </label>

              <div className="relative mt-2">
                <FileText
                  className="absolute left-4 top-4 text-slate-400"
                  size={20}
                />

                <textarea
                  rows="6"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe your issue in detail..."
                  className="w-full border border-slate-200 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-orange-500 resize-none"
                />
              </div>
            </div>

            {/* Button */}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-semibold transition"
            >
              {loading ? "Creating Ticket..." : "Create Ticket"}
            </button>
          </form>
        </div>
      </div>
    </UserLayout>
  );
};

export default CreateTicket;
