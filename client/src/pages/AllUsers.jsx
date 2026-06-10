import { useEffect, useState } from "react";
import { Search, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { getUsers } from "../api/userApi";
import UserLayout from "../layouts/UserLayout";

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  const [page, setPage] = useState(1);

  const [totalPages, setTotalPages] = useState(1);

  const [role, setRole] = useState("user");

  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchUsers();
  }, [page, role]);

  const fetchUsers = async () => {
    try {
      const response = await getUsers(page, role);

      setUsers(response.data.data.users);

      setTotalPages(response.data.data.totalPages);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <UserLayout>
      <div className="space-y-6">
        {/* Header */}

        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-8 text-white">
          <div className="flex items-center gap-3">
            <Users size={35} />
            <h1 className="text-4xl font-bold">User Management</h1>
          </div>

          <p className="mt-2 text-orange-100">Manage registered users.</p>
        </div>

        {/* Search + Filter */}
        <div className="bg-white p-6 rounded-2xl shadow-md border border-orange-100">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Search Box */}
            <div className="relative w-full md:w-96">
              <Search
                size={18}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                placeholder="Search users by name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="
          w-full
          pl-10 pr-4 py-3
          rounded-xl
          border border-gray-200
          bg-gray-50
          focus:bg-white
          focus:border-orange-400
          focus:ring-2 focus:ring-orange-200
          outline-none
          transition
        "
              />
            </div>

            {/* Filter Group */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 px-3 py-2 rounded-xl">
                <Users size={18} className="text-gray-500" />

                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="
            bg-transparent
            outline-none
            text-gray-700
            cursor-pointer
          "
                >
                  <option value="all">All Roles</option>
                  <option value="user">Users</option>
                  <option value="agent">Agents</option>
                  <option value="admin">Admins</option>
                </select>
              </div>

              {/* Optional: Clear Button */}
              <button
                onClick={() => {
                  setSearch("");
                  setRole("all");
                }}
                className="px-4 py-2 rounded-xl bg-orange-500 text-white hover:bg-orange-600 transition shadow-sm"
              >
                Clear
              </button>
            </div>
          </div>

          {/* Small helper text */}
          <p className="text-xs text-gray-400 mt-3">
            Filter users by role or search by name in real time
          </p>
        </div>

        {/* Table */}

        <div className="bg-white rounded-xl shadow overflow-hidden table-auto overflow-x-scroll m-8">
          <table className="w-full">
            <thead className="bg-orange-500 text-white">
              <tr>
                <th className="p-4 text-left">Name</th>

                <th className="p-4 text-left">Email</th>

                <th className="p-4 text-left">Role</th>

                <th className="p-4 text-left">Joined</th>
              </tr>
            </thead>

            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user._id} className="border-b hover:bg-orange-50">
                  <td className="p-4">{user.name}</td>

                  <td className="p-4">{user.email}</td>

                  <td className="p-4">
                    <span
                      className={`
      px-3 py-1 rounded-full text-sm font-medium
      ${
        user.role === "admin"
          ? "bg-red-100 text-red-600"
          : user.role === "agent"
            ? "bg-blue-100 text-blue-600"
            : user.role === "user"
              ? "bg-green-100 text-green-600"
              : "bg-gray-100 text-gray-600"
      }
    `}
                    >
                      {user.role}
                    </span>
                  </td>

                  <td className="p-4">
                    {new Date(user.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}

        <div className="flex justify-center items-center gap-4">
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="bg-orange-500 text-white p-2 rounded-xl"
          >
            <ChevronLeft />
          </button>

          <span>
            Page {page} of {totalPages}
          </span>

          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
            className="bg-orange-500 text-white p-2 rounded-xl"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </UserLayout>
  );
};

export default UserManagement;
