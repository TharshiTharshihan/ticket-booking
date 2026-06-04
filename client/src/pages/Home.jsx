import React from "react";
import {
  ShoppingCart,
  Menu,
  Star,
  Smartphone,
  PlayCircle,
  Repeat,
  CheckCircle,
  ChefHat,
  Search,
  ArrowRight,
} from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex justify-center p-4">
      <div className="w-full max-w-[1400px] bg-white rounded-2xl shadow-xl overflow-hidden border border-orange-100">
        
        {/* Navbar */}
        <header className="flex items-center justify-between px-4 sm:px-10 py-4 sm:py-6 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-orange-500 grid place-content-center">
              <ShoppingCart className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg sm:text-xl font-bold text-orange-600">
              FreshCart
            </span>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
            <a href="#" className="text-slate-600 hover:text-slate-900">
              Premium Groceries
            </a>
            <a href="#" className="text-slate-600 hover:text-slate-900">
              Meal Kits
            </a>
            <a href="#" className="text-slate-600 hover:text-slate-900">
              Express Delivery
            </a>
            <a href="#" className="text-slate-600 hover:text-slate-900">
              Weekly Deals
            </a>
            <a href="#" className="text-slate-600 hover:text-slate-900">
              Customers
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <button className="lg:hidden p-2">
              <Menu className="w-5 h-5 text-slate-600" />
            </button>

            <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition">
                <a href="/login">
              Login here
                </a>
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="flex flex-col items-center text-center px-4 sm:px-6 lg:px-10 py-10">
          
          {/* Reviews */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
            <div className="flex -space-x-2">
              <img
                src="https://randomuser.me/api/portraits/women/32.jpg"
                alt=""
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/men/22.jpg"
                alt=""
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/women/65.jpg"
                alt=""
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/men/41.jpg"
                alt=""
                className="w-8 h-8 rounded-full border-2 border-white"
              />
            </div>

            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 text-amber-400 fill-amber-400"
                />
              ))}
              <span className="ml-2 text-sm text-slate-600">
                Trusted by 50,000+ families
              </span>
            </div>
          </div>

          <h1 className="max-w-5xl text-4xl md:text-6xl font-bold text-slate-800 leading-tight">
            Premium{" "}
            <span className="text-orange-600 ">
              organic groceries
            </span>{" "}
            delivered to your doorstep in 30 minutes
          </h1>

          <p className="max-w-2xl mt-6 text-lg text-slate-600">
            Experience the finest selection of farm-fresh produce,
            artisanal goods, and everyday essentials.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <button className="flex items-center justify-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600">
              <Smartphone className="w-5 h-5" />
              Get FreshCart App
            </button>

            <button className="flex items-center justify-center gap-2 border-2 border-slate-200 px-8 py-4 rounded-full font-semibold text-slate-700">
              <PlayCircle className="w-5 h-5" />
              Watch Demo
            </button>
          </div>

          {/* Hero Image */}
          <div className="relative w-full mt-16">
            <img
              src="https://images.unsplash.com/photo-1556745750-68295fefafc5?w=2160&q=80"
              alt="Grocery"
              className="w-full max-w-5xl mx-auto rounded-2xl h-[450px] object-cover shadow-2xl"
            />

            {/* Left Card */}
            <div className="absolute left-10 top-20 bg-white p-5 rounded-2xl shadow-xl w-56 hidden lg:block">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
                  <Repeat className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold">Smart Subscribe</h3>
                  <p className="text-xs text-slate-500">
                    by Madison Chen
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-600">
                Never run out of essentials again.
              </p>

              <div className="flex items-center gap-2 mt-3 text-orange-600 text-sm">
                <CheckCircle className="w-4 h-4" />
                Save up to 25% monthly
              </div>
            </div>

            {/* Right Card */}
            <div className="absolute right-10 top-32 bg-white p-5 rounded-2xl shadow-xl w-52 hidden lg:block">
              <div className="flex justify-between mb-3">
                <span className="text-xs uppercase text-slate-500">
                  Chef's Recipe
                </span>
                <ChefHat className="w-4 h-4 text-orange-500" />
              </div>

              <h3 className="font-bold">Truffle Risotto</h3>
              <p className="text-sm text-slate-500">
                8 ingredients • 45 min
              </p>

              <div className="text-orange-600 text-sm mt-4">
                All ingredients available
              </div>
            </div>

            {/* Search Bar */}
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-8 w-[90%] max-w-md">
              <div className="flex items-center bg-white rounded-2xl shadow-2xl px-4 py-3 border border-orange-100">
                <Search className="w-5 h-5 text-slate-400" />

                <input
                  type="text"
                  placeholder="Search organic vegetables..."
                  className="flex-1 px-3 outline-none"
                />

                <button className="bg-orange-500 p-2 rounded-xl text-white">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;