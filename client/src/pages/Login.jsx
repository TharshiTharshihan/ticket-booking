import React from "react";
import { Ticket, Mail, Lock } from "lucide-react";

const Login = () => {
  return (
    <div className="min-h-screen bg-orange-50 flex items-center justify-center p-6">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">

        {/* Left Side */}
        <div className="hidden lg:flex relative">
          <img
            src="https://images.unsplash.com/photo-1519003722824-194d4455a60c"
            alt="Travel"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/30 flex flex-col justify-center p-10">
            <h1 className="text-5xl font-bold text-white">
              Book Your Journey
            </h1>

            <p className="text-white/90 mt-4 text-lg">
              Reserve train, bus and flight tickets within minutes.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col justify-center p-8 lg:p-14">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-orange-500 p-3 rounded-xl">
              <Ticket className="text-white w-6 h-6" />
            </div>

            <h2 className="text-2xl font-bold text-orange-600">
              TicketHub
            </h2>
          </div>

          <h1 className="text-4xl font-bold text-slate-800">
            Welcome Back 👋
          </h1>

          <p className="text-slate-500 mt-2">
            Login to continue booking your tickets
          </p>

          <form className="mt-8 space-y-5">

            <div className="relative">
              <Mail className="absolute left-4 top-4 text-slate-400 w-5 h-5" />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 focus:border-orange-500 outline-none"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-4 top-4 text-slate-400 w-5 h-5" />
              <input
                type="password"
                placeholder="Password"
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 focus:border-orange-500 outline-none"
              />
            </div>

            <button className="w-full bg-orange-500 text-white py-4 rounded-xl font-semibold hover:bg-orange-600 transition">
              Login
            </button>
          </form>

          <div className="flex justify-between mt-5 text-sm">
            <a href="#" className="text-orange-500">
              Forgot Password?
            </a>

            <a href="#" className="text-slate-600">
              Register
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;