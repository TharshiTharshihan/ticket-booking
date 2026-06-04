import React from "react";
import {
  Ticket,
  User,
  Mail,
  Phone,
  Lock,
  CheckCircle,
} from "lucide-react";

const Register = () => {
  return (
    <div className="min-h-screen bg-orange-50 flex items-center justify-center p-6">
      <div className="w-full max-w-7xl bg-white rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">

        {/* Left Side */}
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-10 text-white flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-10">
            <Ticket className="w-10 h-10" />
            <h2 className="text-3xl font-bold">
              TicketHub
            </h2>
          </div>

          <h1 className="text-5xl font-bold mb-6">
            Join Thousands of Travelers
          </h1>

          <div className="space-y-5">

            <div className="flex items-center gap-3">
              <CheckCircle />
              <span>Book tickets instantly</span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle />
              <span>Secure online payments</span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle />
              <span>Live seat availability</span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle />
              <span>24/7 customer support</span>
            </div>

          </div>
        </div>

        {/* Right Side */}
        <div className="p-8 lg:p-14 flex flex-col justify-center">

          <h1 className="text-4xl font-bold text-slate-800">
            Create Account
          </h1>

          <p className="text-slate-500 mt-2">
            Start booking tickets in minutes
          </p>

          <form className="mt-8 space-y-4">

            <div className="relative">
              <User className="absolute left-4 top-4 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full pl-12 py-4 border rounded-xl"
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-4 top-4 text-slate-400 w-5 h-5" />
              <input
                type="email"
                placeholder="Email"
                className="w-full pl-12 py-4 border rounded-xl"
              />
            </div>

            <div className="relative">
              <Phone className="absolute left-4 top-4 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full pl-12 py-4 border rounded-xl"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-4 top-4 text-slate-400 w-5 h-5" />
              <input
                type="password"
                placeholder="Password"
                className="w-full pl-12 py-4 border rounded-xl"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-4 top-4 text-slate-400 w-5 h-5" />
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full pl-12 py-4 border rounded-xl"
              />
            </div>

            <button className="w-full bg-orange-500 text-white py-4 rounded-xl font-semibold hover:bg-orange-600">
              Create Account
            </button>
          </form>

          <p className="text-center mt-5 text-slate-600">
            Already have an account?
            <a href="#" className="text-orange-500 ml-2 font-semibold">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;