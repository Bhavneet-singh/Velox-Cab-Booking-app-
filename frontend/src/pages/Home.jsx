import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Background Image */}
      <div className="relative w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
          alt="Traffic Light"
          className="w-full h-full object-cover"
        />

        {/* Branding */}
        <div className="text-3xl absolute top-4 left-4  font-semibold text-black bg-gray-200 p-4 rounded-lg ">
          Velox- Cab Booking App 
        </div>

        {/* Bottom Section */}
        <div className="absolute bottom-0 w-full bg-white p-6 rounded-t-2xl shadow-lg">
          <h1 className="text-xl font-bold mb-4">Get Started with Velox</h1>
          <Link to="/login" className="flex items-center justify-center w-full bg-black text-white py-3 rounded-lg text-lg font-medium">
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
