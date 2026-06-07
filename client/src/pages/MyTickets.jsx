import UserLayout from "../layouts/UserLayout";

const MyTickets = () => {
  return (
    <UserLayout>
      <h1 className="text-3xl font-bold mb-6">
        My Tickets
      </h1>

      <div className="space-y-5">

        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="font-bold">
            TKT-1001
          </h2>

          <p>Payment Issue</p>

          <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full">
            Open
          </span>
        </div>

      </div>
    </UserLayout>
  );
};

export default MyTickets;