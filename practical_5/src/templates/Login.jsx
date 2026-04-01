import React from "react";
import { FaGoogle, FaFacebookF, FaTimes } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export default function Login() {
  return (
    <div className="min-h-screen bg-black/70 flex items-center justify-center relative px-4">
      
      {/* Modal Container */}
      <div className="w-full max-w-5xl bg-white rounded-2xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-2">
        
        {/* LEFT SIDE */}
        <div className="bg-gray-100 flex flex-col justify-between p-10">
          <div>
            <h2 className="text-xl font-medium text-gray-800">Welcome!</h2>
          </div>

          <div className="flex items-center gap-6">
            <h1 className="text-6xl font-bold text-black">W.</h1>
            <div className="w-24 h-24 rounded-full border-8 border-green-300 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full border-4 border-indigo-600 flex items-center justify-center text-indigo-600 text-3xl">
                🙂
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-600">
            Not a member yet?{" "}
            <span className="font-semibold underline cursor-pointer">
              Register now
            </span>
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="p-10 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-6">Log in</h2>

          <div className="space-y-4">
            <div>
              <label className="text-xs text-gray-500 uppercase">
                Email or Username
              </label>
              <input
                type="text"
                placeholder="Email or Username"
                className="w-full border-b border-gray-300 focus:outline-none focus:border-black py-2 text-sm"
              />
            </div>

            <div>
              <label className="text-xs text-gray-500 uppercase">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                className="w-full border-b border-gray-300 focus:outline-none focus:border-black py-2 text-sm"
              />
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <input type="checkbox" />
              <span>Keep me logged in</span>
            </div>

            <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition">
              Log in now
            </button>

            <div className="text-right text-xs text-gray-600 cursor-pointer hover:underline">
              Forgot your password?
            </div>

            <div className="text-center text-sm text-gray-500 mt-4">
              Or sign in with
            </div>

            <div className="flex gap-3 mt-2">
              <button className="flex items-center justify-center gap-2 w-full border rounded-lg py-2 hover:bg-gray-100 transition text-sm">
                <FaGoogle /> Google
              </button>

              <button className="flex items-center justify-center gap-2 w-full border rounded-lg py-2 hover:bg-gray-100 transition text-sm">
                <FaFacebookF /> Facebook
              </button>

              <button className="flex items-center justify-center gap-2 w-full border rounded-lg py-2 hover:bg-gray-100 transition text-sm">
                <BsTwitterX /> Twitter
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Close Button */}
      <button className="absolute bottom-6 right-6 bg-black text-white p-3 rounded-lg hover:bg-gray-800 transition">
        <FaTimes />
      </button>
    </div>
  );
}