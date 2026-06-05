import {useState} from "react";
import {
  Ticket,
  User,
  Mail,
  Phone,
  Lock,
  CheckCircle,
} from "lucide-react";
import { registerUser } from "../api/authApi";

import { useNavigate } from "react-router-dom";


const Register = () => {

    const navigate = useNavigate();

const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
});

const [showPassword, setShowPassword] =
  useState(false);

const [showConfirmPassword,
  setShowConfirmPassword] =
  useState(false);

const [loading, setLoading] =
  useState(false);

const [error, setError] =
  useState("");

const [success, setSuccess] =
  useState("");

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
    !formData.phone ||
    !formData.password ||
    !formData.confirmPassword
  ) {
    return setError(
      "Please fill all required fields"
    );
  }

  if (
    formData.password !==
    formData.confirmPassword
  ) {
    return setError(
      "Passwords do not match"
    );
  }

  try {
    setLoading(true);

    const response =
      await registerUser({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
      });

    setSuccess(
      response.data.message ||
      "Registration successful"
    );

    setFormData({
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    });
      navigate("/sign-in");

  } catch (err) {
    setError(
      err.response?.data?.message ||
      "Registration failed"
    );
    
  } finally {
    setLoading(false);
  }
};



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
                className="w-full pl-12 py-4 border rounded-xl"
              />
            </div>

            <div className="relative">
              <Phone className="absolute left-4 top-4 text-slate-400 w-5 h-5" />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full pl-12 py-4 border rounded-xl"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-4 top-4 text-slate-400 w-5 h-5" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full pl-12 py-4 border rounded-xl"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-4 top-4 text-slate-400 w-5 h-5" />
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                className="w-full pl-12 py-4 border rounded-xl"
              />
            </div>

            <button type="submit" className="w-full bg-orange-500 text-white py-4 rounded-xl font-semibold hover:bg-orange-600 cursor-pointer">
              Create Account
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