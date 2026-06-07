import Sidebar from "../components/Sidebar";

const UserLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-orange-50 flex">
      <Sidebar />

      <div className="flex-1 p-6 overflow-auto">
        {children}
      </div>
    </div>
  );
};

export default UserLayout;