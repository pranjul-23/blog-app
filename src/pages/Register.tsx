import React from "react";
import { Link } from "react-router-dom";

const Register: React.FC = () => {
  return (
    <div className="signup-page flex items-center justify-center mt-20">
      <form className="w-[400px] p-4 bg-white shadow-md rounded-md">
        <h1 className="text-2xl text-center">Sign up</h1>
        <div className="flex flex-col mt-2">
          <label className="text-sm text-[#1A1A1A] mb-1">Name:</label>
          <input
            type="text"
            className="border border-[#666666] p-1 text-[#1A1A1A] outline-0 rounded-sm"
          />
        </div>
        <div className="flex flex-col mt-2">
          <label className="text-sm text-[#1A1A1A] mb-1">Email:</label>
          <input
            type="email"
            className="border border-[#666666] p-1 text-[#1A1A1A] outline-0 rounded-sm"
          />
        </div>
        <div className="flex flex-col mt-2">
          <label className="text-sm text-[#1A1A1A] mb-1">Password:</label>
          <input
            type="password"
            className="border border-[#666666] p-1 text-[#1A1A1A] outline-0 rounded-sm"
          />
        </div>
        <div className="w-full mt-5">
          <button className="w-full bg-blue-400 p-1 border border-blue-400 rounded-sm cursor-pointer text-white">
            Sign up
          </button>
        </div>
        <div className="flex justify-center">
          <span className="text-[#666]">
            <small>Already have an account?</small>
          </span>
          <Link to="/login">
            <span className="text-blue-500 ml-0.5">
              <small>Log in</small>
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
