import UserLayout from "../layouts/UserLayout";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const roleLabel = user?.role || "User";
  const initial = (user?.name || "U").charAt(0).toUpperCase();

  return (
    <UserLayout>
      <div className="space-y-6">
        <div className="bg-linear-to-r from-orange-500 to-orange-600 rounded-3xl p-8 text-white shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="h-20 w-20 rounded-2xl bg-white/15 border border-white/20 grid place-content-center text-2xl font-bold">
              {initial}
            </div>

            <div className="flex-1">
              <p className="text-orange-100 text-sm font-medium uppercase tracking-[0.2em]">
                Account Profile
              </p>
              <h1 className="mt-2 text-3xl md:text-4xl font-bold">
                {user?.name || "Guest User"}
              </h1>
              <p className="mt-2 text-orange-100 max-w-2xl">
                View your account details and role information in one clean,
                professional dashboard.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 border border-white/20 px-4 py-3">
              <p className="text-xs uppercase tracking-[0.2em] text-orange-100">
                Role
              </p>
              <p className="mt-1 text-lg font-semibold">{roleLabel}</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-6 md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-slate-800">
                  Personal Information
                </h2>
                <p className="mt-1 text-slate-500">
                  Your account data is shown below.
                </p>
              </div>

              <span className="rounded-full bg-orange-50 px-3 py-1 text-sm font-medium text-orange-600">
                Active account
              </span>
            </div>

            <div className="mt-8 grid gap-5">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-600">
                  Name
                </label>
                <input
                  value={user?.name || "-"}
                  disabled
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-slate-800 shadow-sm outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-600">
                  Email
                </label>
                <input
                  value={user?.email || "-"}
                  disabled
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-slate-800 shadow-sm outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-600">
                  Role
                </label>
                <input
                  value={roleLabel}
                  disabled
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-slate-800 shadow-sm outline-none"
                />
              </div>
            </div>
          </div>

          <div className="bg-slate-900 rounded-3xl shadow-lg p-6 md:p-8 text-white border border-slate-800">
            <p className="text-sm uppercase tracking-[0.2em] text-orange-300">
              Profile Summary
            </p>
            <h3 className="mt-3 text-2xl font-bold">Clean account overview</h3>
            <p className="mt-3 text-slate-300 leading-7">
              This layout keeps the profile readable, polished, and consistent
              with the orange and slate visual style used across the app.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                <p className="text-sm text-slate-400">Display Name</p>
                <p className="mt-1 font-semibold text-white">
                  {user?.name || "-"}
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                <p className="text-sm text-slate-400">Primary Email</p>
                <p className="mt-1 font-semibold text-white break-all">
                  {user?.email || "-"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default Profile;
