import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { FiUser } from "react-icons/fi";

export default function AuthForm() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Set your static credentials here
  const ADMIN_EMAIL = "admin@tattoo.com";
  const ADMIN_PASSWORD = "tattoo123";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (
      form.email.trim() === ADMIN_EMAIL &&
      form.password === ADMIN_PASSWORD
    ) {
      toast.success("Login successful");
      navigate("/admin/dashboard");
    } else {
      toast.error("Invalid email or password");
    }
    setLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-md mx-auto bg-[#f7fcf7] rounded-2xl shadow-2xl px-8 py-10 mt-14 border border-green-200 mt-50 mb-20"
    >
      <div className="flex justify-center mb-4">
        <span className="flex items-center bg-green-500 text-white px-5 py-2 rounded-xl text-lg gap-2 shadow font-semibold">
          <FiUser size={22} />
          Admin Login
        </span>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full rounded-[14px] border border-green-400 bg-white px-4 py-3 text-green-800 text-base focus:outline-none focus:ring-2 focus:ring-green-300"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full rounded-[14px] border border-green-400 bg-white px-4 py-3 text-green-800 text-base focus:outline-none focus:ring-2 focus:ring-green-300"
          required
        />
        <button
          className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white text-lg font-medium rounded-[14px] py-3 mt-2 transition-colors duration-200 shadow focus:outline-none focus:ring-2 focus:ring-green-300"
          type="submit"
          disabled={loading}
        >
          <FiUser size={20} />
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </motion.div>
  );
}
