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
      className="max-w-md mx-auto bg-gray-900 rounded-3xl shadow-2xl px-10 py-12 mt-14 border border-orange-600 mb-20 mt-30"
    >
      <div className="flex justify-center mb-6">
        <span className="flex items-center bg-orange-600 text-white px-6 py-3 rounded-xl text-lg gap-3 shadow font-extrabold tracking-wide">
          <FiUser size={24} />
          Admin Login
        </span>
      </div>
      <form onSubmit={handleSubmit} className="space-y-8">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full rounded-[14px] border border-orange-600 bg-gray-800 px-5 py-3 text-white placeholder-orange-400 text-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full rounded-[14px] border border-orange-600 bg-gray-800 px-5 py-3 text-white placeholder-orange-400 text-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />
        <button
          className="w-full flex items-center justify-center gap-3 bg-orange-600 hover:bg-orange-700 text-white text-lg font-extrabold rounded-[14px] py-3 mt-4 transition-shadow shadow-orange-500/50 focus:outline-none focus:ring-4 focus:ring-orange-400"
          type="submit"
          disabled={loading}
        >
          <FiUser size={22} />
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </motion.div>
  );
}
