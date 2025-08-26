import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailErrorMsg, setEmailErrorMsg] = useState<string>("");
  const [invalidCredsError, setInvalidCredsError] = useState<string>("");

  const handleEmailBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(e.target.value)) {
      setEmailErrorMsg("Please enter a valid email!");
    } else {
      setEmailErrorMsg("");
    }
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let invalidCreds = "";

    if (!emailErrorMsg?.length && !invalidCredsError?.length) {
      console.log("user>>", { email, password });
    }
  };

  return (
    <div className="login-page flex items-center justify-center mt-20">
      <form
        className="w-[400px] p-4 bg-white shadow-md rounded-md"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl text-center">Login</h1>
        <div className="flex flex-col mt-2">
          <label className="text-sm text-[#1A1A1A] mb-1">Email:</label>
          <input
            type="email"
            placeholder="Enter email"
            className="border border-[#666666] p-1 text-[#1A1A1A] outline-0 rounded-sm"
            value={email}
            onChange={handleEmail}
            onBlur={handleEmailBlur}
            required
          />
          {emailErrorMsg && (
            <span className="text-red-500">
              <small>{emailErrorMsg}</small>
            </span>
          )}
        </div>
        <div className="flex flex-col mt-2">
          <label className="text-sm text-[#1A1A1A] mb-1">Password:</label>
          <input
            type="password"
            placeholder="Enter password"
            className="border border-[#666666] p-1 text-[#1A1A1A] outline-0 rounded-sm"
            value={password}
            onChange={handlePassword}
            required
          />
        </div>
        <div className="w-full mt-5">
          <button
            type="submit"
            className="w-full bg-blue-400 p-1 border border-blue-400 rounded-sm cursor-pointer text-white"
          >
            Login
          </button>
        </div>
        <div className="flex justify-center">
          <span className="text-[#666]">
            <small>Don't have an account?</small>
          </span>
          <Link to="/signup">
            <span className="text-blue-500 ml-0.5">
              <small>Sign up</small>
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
