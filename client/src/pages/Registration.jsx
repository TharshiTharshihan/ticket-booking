import { useState } from "react";
import {
  Ticket,
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  CheckCircle,
} from "lucide-react";
import { registerUser } from "../api/authApi";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      toast.error("Please fill all required fields", { theme: "dark" });
      return setError("Please fill all required fields");
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match", { theme: "dark" });
      return setError("Passwords do not match");
    }

    try {
      setLoading(true);

      const response = await registerUser({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      setSuccess(response.data.message || "Registration successful");

      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      navigate("/dashboard");
      toast.success("Registration successful! Welcome to TicketHub", {
        theme: "dark",
      });
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
      toast.error(err.response?.data?.message || "Registration failed", {
        theme: "dark",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-orange-50 flex items-center justify-center p-6">
      <div className="w-full max-w-7xl overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-2xl grid lg:grid-cols-2">
        {/* Left Side */}
        <div className="bg-linear-to-br from-orange-500 to-amber-500 p-10 text-white flex flex-col justify-between">
          <div className="flex items-center gap-3 mb-10">
            <div className="grid h-12 w-12 place-content-center rounded-2xl bg-white/15 backdrop-blur">
              <Ticket className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">TicketHub</h2>
          </div>

          <div className="max-w-xl">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Create your support account in minutes
            </h1>

            <p className="text-orange-50/90 text-lg max-w-lg">
              Join a clean, organized ticketing workspace built for customers,
              agents, and fast issue tracking.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 mt-12">
            <div className="rounded-2xl bg-white/15 p-5 backdrop-blur border border-white/15">
              <CheckCircle className="w-6 h-6 mb-3" />
              <h3 className="font-semibold text-lg">Structured requests</h3>
              <p className="mt-2 text-sm text-orange-50/90">
                Capture every ticket with clear ownership and status.
              </p>
            </div>

            <div className="rounded-2xl bg-white/15 p-5 backdrop-blur border border-white/15">
              <CheckCircle className="w-6 h-6 mb-3" />
              <h3 className="font-semibold text-lg">Team-ready access</h3>
              <p className="mt-2 text-sm text-orange-50/90">
                Keep support flows simple for both users and agents.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="p-8 lg:p-14 flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-slate-800">Create Account</h1>

          <p className="text-slate-500 mt-2">
            Start booking tickets in minutes
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div className="relative">
              <User className="absolute left-4 top-4 text-slate-400 w-5 h-5" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full pl-12 py-4 border rounded-xl"
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-4 top-4 text-slate-400 w-5 h-5" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full pl-12 py-4 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-4 top-4 text-slate-400 w-5 h-5" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full pl-12 pr-14 py-4 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-orange-400"
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-3 top-3 grid h-8 w-8 place-content-center rounded-xl border border-slate-200 bg-white text-slate-500 transition hover:border-orange-400 hover:text-orange-500"
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>

            <div className="relative">
              <Lock className="absolute left-4 top-4 text-slate-400 w-5 h-5" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                className="w-full pl-12 pr-14 py-4 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-orange-400"
              />

              <button
                type="button"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                aria-label={
                  showConfirmPassword
                    ? "Hide confirm password"
                    : "Show confirm password"
                }
                className="absolute right-3 top-3 grid h-8 w-8 place-content-center rounded-xl border border-slate-200 bg-white text-slate-500 transition hover:border-orange-400 hover:text-orange-500"
              >
                {showConfirmPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-4 rounded-xl font-semibold hover:bg-orange-600 cursor-pointer transition shadow-lg shadow-orange-500/20"
            >
              {loading ? "Creating account..." : "Create Account"}
            </button>
          </form>

          <p className="text-center mt-5 text-slate-600">
            Already have an account?
            <a href="/login" className="text-orange-500 ml-2 font-semibold">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
