import UserLayout from "../layouts/UserLayout";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <UserLayout>
      {user.role === "user" ? (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-8 text-white">
            <h1 className="text-4xl font-bold">
              Welcome Back, {user?.name} 👋
            </h1>

            <p className="mt-3 text-orange-100">
              Manage your support tickets easily.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            <div className="bg-white rounded-2xl p-6 shadow">
              <p className="text-slate-500">Total Tickets</p>

              <h2 className="text-4xl font-bold text-orange-500">12</h2>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow">
              <p className="text-slate-500">Open Tickets</p>

              <h2 className="text-4xl font-bold text-red-500">4</h2>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow">
              <p className="text-slate-500">Resolved Tickets</p>

              <h2 className="text-4xl font-bold text-green-500">8</h2>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow">
            <h2 className="text-2xl font-bold mb-4">Recent Tickets</h2>

            <div className="space-y-4">
              <div className="border rounded-xl p-4">
                <h3 className="font-semibold">Payment Issue</h3>

                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">
                  Open
                </span>
              </div>

              <div className="border rounded-xl p-4">
                <h3 className="font-semibold">Refund Request</h3>

                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                  Resolved
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : user.role === "admin" ? (
        <div className="bg-white p-8 rounded-3xl shadow">
          <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
          
        </div>
      ) : (
        <div className="bg-white p-8 rounded-3xl shadow">
          <h1 className="text-3xl font-bold mb-6">
            Welcome to the Dashboard Agent
          </h1>
        </div>
      )}
    </UserLayout>
  );
};

export default Dashboard;
