"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function login(e: any) {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });
      const json = await response.json();
      router.push("/");
    } catch (error) {}
  }

  return (
    <div className="bg-gray-800 p-10 w-96 rounded-lg">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <form onSubmit={login}>
        <div className="mb-4">
          <label className="block text-lg font-medium">Email</label>
          <input
            type="email"
            className="bg-gray-700 text-white rounded px-6 py-3 w-full"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-medium">Password</label>
          <input
            type="password"
            className="bg-gray-700 text-white rounded px-6 py-3 w-full"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <button className="bg-green-500 text-white px-12 py-4 rounded hover:bg-green-400 w-full">
          Login
        </button>
      </form>
      <p className="mt-4 text-center">
        Don't have an account?{" "}
        <a href="./register.html" className="text-green-400 hover:underline">
          Register
        </a>
      </p>
    </div>
  );
};

export default LoginPage;
