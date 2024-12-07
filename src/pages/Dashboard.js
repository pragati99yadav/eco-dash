import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <header className="bg-blue-600 text-white shadow-md">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Logo" className="w-12 h-12" />
            <h1 className="text-2xl font-bold">Dashboard</h1>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-6">
        {/* Welcome Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Welcome Back!
          </h2>
          <p className="text-gray-600">
            Access your product management tools below and stay on top of your inventory.
          </p>
        </div>

        {/* Quick Actions Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Manage Products */}
          <div
            onClick={() => navigate("/manage-products")}
            className="bg-blue-500 text-white hover:bg-blue-600 transition p-6 rounded-lg shadow-md cursor-pointer flex items-center gap-4"
          >
            <div className="text-4xl">📦</div>
            <div>
              <h3 className="text-lg font-semibold">Manage Products</h3>
              <p className="text-sm">View and update your inventory.</p>
            </div>
          </div>

          {/* Add Product */}
          <div
            onClick={() => navigate("/add-product")}
            className="bg-green-500 text-white hover:bg-green-600 transition p-6 rounded-lg shadow-md cursor-pointer flex items-center gap-4"
          >
            <div className="text-4xl">➕</div>
            <div>
              <h3 className="text-lg font-semibold">Add Product</h3>
              <p className="text-sm">Add new items to your inventory.</p>
            </div>
          </div>

          {/* View Reports */}
          <div className="bg-yellow-500 text-white hover:bg-yellow-600 transition p-6 rounded-lg shadow-md cursor-pointer flex items-center gap-4">
            <div className="text-4xl">📊</div>
            <div>
              <h3 className="text-lg font-semibold">View Reports</h3>
              <p className="text-sm">Analyze your inventory data.</p>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Quick Stats
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold text-gray-700">Total Products</h3>
              <p className="text-3xl font-bold text-blue-600">120</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold text-gray-700">New Products</h3>
              <p className="text-3xl font-bold text-green-600">8</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold text-gray-700">Active Brands</h3>
              <p className="text-3xl font-bold text-yellow-600">5</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold text-gray-700">Pending Updates</h3>
              <p className="text-3xl font-bold text-red-600">2</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
