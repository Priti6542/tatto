import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Gallery from '../pages/Gallery';
import ContactUs from '../pages/ContactUs';
import AuthForm from '../pages/auth/AuthForm';
import Dashboard from '../pages/admin/Dashboard';
import ScrollToTop from '../pages/ScrollTop';

function AppRoutes() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop/>
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<AuthForm/>} />
          <Route path="admin/dashboard" element={<Dashboard/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default AppRoutes;
