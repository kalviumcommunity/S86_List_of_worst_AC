import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signupUser } from "../api/auth";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
     try {
      const data = await signupUser({ name, email, password });
      console.log('Signed up:', data);
      alert('Signup successful! You can now log in.');
    } catch (err) {
      console.error(err);
      alert('Signup failed');
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-white to-blue-300">
      <div className="bg-white p-10 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-5">
          <input
            type="text"
            placeholder="Full Name"
            className="w-3/5 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          /><br></br>
          <input
            type="email"
            placeholder="Email"
            className="w-3/5 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          /><br></br>
          <input
            type="password"
            placeholder="Password"
            className="w-3/5 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          /><br></br>
          <button
            type="submit"
            className="w-3/5 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-sm mt-6 text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-medium hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
