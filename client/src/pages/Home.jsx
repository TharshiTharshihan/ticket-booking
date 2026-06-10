import {
  Menu,
  Ticket,
  ShieldCheck,
  Clock3,
  CircleCheckBig,
  Headphones,
  Layers3,
  Search,
  ArrowRight,
  Laptop,
} from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6">
      <div className="mx-auto w-full max-w-350 overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-2xl shadow-slate-200/70">
        {/* Navbar */}
        <header className="flex items-center justify-between border-b border-slate-100 px-4 py-4 sm:px-10 sm:py-6 bg-white/90 backdrop-blur">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-content-center rounded-2xl bg-linear-to-br from-orange-500 to-amber-500 shadow-lg shadow-orange-500/20">
              <Ticket className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-bold text-slate-800 sm:text-xl">
              TicketHub
            </span>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium lg:flex">
            <a href="#" className="text-slate-600 hover:text-slate-900">
              Raise Tickets
            </a>
            <a href="#" className="text-slate-600 hover:text-slate-900">
              Track Status
            </a>
            <a href="#" className="text-slate-600 hover:text-slate-900">
              Agent Assignment
            </a>
            <a href="#" className="text-slate-600 hover:text-slate-900">
              SLA Monitoring
            </a>
            <a href="#" className="text-slate-600 hover:text-slate-900">
              Analytics
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <button className="lg:hidden p-2">
              <Menu className="h-5 w-5 text-slate-600" />
            </button>

            <button className="rounded-full bg-linear-to-r from-orange-500 to-amber-500 px-6 py-3 font-semibold text-white transition hover:opacity-95">
              <a href="/login">Login here</a>
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative flex flex-col items-center px-4 py-10 text-center sm:px-6 lg:px-10 lg:py-14">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.16),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(148,163,184,0.14),transparent_28%)]" />

          {/* Reviews */}
          <div className="relative z-10 flex flex-col gap-4 sm:flex-row items-center mb-8 rounded-full border border-orange-100 bg-white px-5 py-3 shadow-lg shadow-slate-200/70 backdrop-blur">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              Secure support workflows
            </div>
            <div className="hidden h-4 w-px bg-slate-200 sm:block" />
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Clock3 className="h-4 w-4 text-orange-400" />
              Faster response times
            </div>
            <div className="hidden h-4 w-px bg-slate-200 sm:block" />
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Headphones className="h-4 w-4 text-sky-400" />
              Built for agents and customers
            </div>
          </div>

          <h1 className="relative z-10 max-w-5xl text-4xl font-bold leading-tight text-slate-800 md:text-6xl">
            A professional ticketing workspace for managing issues, assignments,
            and resolutions.
          </h1>

          <p className="relative z-10 mt-6 max-w-2xl text-lg text-slate-600">
            Keep every customer request organized with clean dashboards, clear
            ownership, and a streamlined support flow for your team.
          </p>

          {/* CTA Buttons */}
          <div className="relative z-10 flex flex-col gap-4 mt-10 sm:flex-row">
            <button className="flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-orange-500 to-amber-500 px-8 py-4 font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:opacity-95">
              <Laptop className="h-5 w-5" />
              Open Dashboard
            </button>

            <button className="flex items-center justify-center gap-2 rounded-full border border-slate-200 px-8 py-4 font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
              <CircleCheckBig className="h-5 w-5" />
              View Workflow
            </button>
          </div>

          {/* Hero Image */}
          <div className="relative z-10 mt-16 w-full">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=2160&q=80"
              alt="Support team dashboard"
              className="mx-auto h-112.5 w-full max-w-5xl rounded-3xl object-cover shadow-2xl shadow-slate-200/70"
            />

            {/* Left Card */}
            <div className="absolute left-10 top-20 hidden w-60 rounded-2xl border border-slate-200 bg-white p-5 shadow-xl lg:block">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500">
                  <Layers3 className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800">Smart Routing</h3>
                  <p className="text-xs text-slate-500">by support ops</p>
                </div>
              </div>

              <p className="text-sm text-slate-600">
                Automatically route tickets to the right agent or queue.
              </p>

              <div className="mt-3 flex items-center gap-2 text-sm text-orange-600">
                <CircleCheckBig className="h-4 w-4" />
                Reduce response delays
              </div>
            </div>

            {/* Right Card */}
            <div className="absolute right-10 top-32 hidden w-56 rounded-2xl border border-slate-200 bg-white p-5 shadow-xl lg:block">
              <div className="mb-3 flex justify-between">
                <span className="text-xs uppercase text-slate-500">
                  SLA Tracking
                </span>
                <ShieldCheck className="h-4 w-4 text-orange-500" />
              </div>

              <h3 className="font-bold text-slate-800">Priority Escalation</h3>
              <p className="text-sm text-slate-500">
                High priority tickets • live monitoring
              </p>

              <div className="mt-4 text-sm text-orange-600">
                All updates stay visible
              </div>
            </div>

            {/* Search Bar */}
            <div className="absolute left-1/2 -bottom-8 w-[90%] max-w-md -translate-x-1/2">
              <div className="flex items-center rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-2xl">
                <Search className="h-5 w-5 text-slate-400" />

                <input
                  type="text"
                  placeholder="Search tickets, users, or statuses..."
                  className="flex-1 px-3 outline-none"
                />

                <button className="rounded-xl bg-orange-500 p-2 text-white">
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Feature strip */}
        <section className="grid gap-4 px-4 pb-10 pt-8 sm:px-6 lg:grid-cols-3 lg:px-10">
          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-lg shadow-slate-100">
            <div className="flex items-center gap-3 text-slate-800">
              <CircleCheckBig className="h-5 w-5 text-orange-400" />
              <h3 className="text-lg font-semibold">Ticket visibility</h3>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Track open, in-progress, resolved, and closed tickets from a
              single workspace.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-lg shadow-slate-100">
            <div className="flex items-center gap-3 text-slate-800">
              <ShieldCheck className="h-5 w-5 text-emerald-400" />
              <h3 className="text-lg font-semibold">Role-based access</h3>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Users can submit issues while agents manage assignments and
              comments.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-lg shadow-slate-100">
            <div className="flex items-center gap-3 text-slate-800">
              <Headphones className="h-5 w-5 text-sky-400" />
              <h3 className="text-lg font-semibold">Fast support flow</h3>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Built for clear communication between customers and support teams.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
