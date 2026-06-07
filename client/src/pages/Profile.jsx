import UserLayout from "../layouts/UserLayout";

const Profile = () => {
  const user = JSON.parse(
    localStorage.getItem("user")
  );

  return (
    <UserLayout>
      <div className="bg-white p-8 rounded-3xl shadow">

        <h1 className="text-3xl font-bold mb-6">
          My Profile
        </h1>

        <div className="space-y-4">

          <div>
            <label>Name</label>
            <input
              value={user?.name}
              disabled
              className="w-full border p-4 rounded-xl"
            />
          </div>

          <div>
            <label>Email</label>
            <input
              value={user?.email}
              disabled
              className="w-full border p-4 rounded-xl"
            />
          </div>

          <div>
            <label>Role</label>
            <input
              value={user?.role}
              disabled
              className="w-full border p-4 rounded-xl"
            />
          </div>

        </div>
      </div>
    </UserLayout>
  );
};

export default Profile;