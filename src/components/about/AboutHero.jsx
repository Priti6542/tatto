import React from "react";
import download from "../../assets/download.jpg"; // ✅ check the correct image path

const About = () => {
  return (
    <section
  className="relative bg-cover bg-center bg-no-repeat text-white flex flex-col justify-center items-center min-h-screen"
  style={{
    backgroundImage: `url(${download})`,
    backgroundColor: "black", // fills empty space around image
  }}
>
      {/* 🔲 Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* 🌟 Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-10 max-w-6xl mx-auto px-6 md:px-10 w-full">
        {/* 🧭 Left Section */}
        <div className="flex-1 text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 uppercase tracking-wide">
            About
          </h1>
          <p className="text-lg md:text-xl max-w-lg leading-relaxed text-gray-200">
            With over a decade in business, our studio offers both booked and
            walk-in services daily from 12–8 PM. Our artists bring nearly 50 years
            of combined experience, creativity, and passion for tattoo artistry.
          </p>
        </div>

        {/* 💬 Right Section */}
        <div className="flex flex-col text-right space-y-3 text-lg tracking-wider font-light md:w-1/3">
          {/* Optional Navigation Links */}
          {/* <a href="#" className="hover:text-gray-300 transition">ARTISTS</a>
          <a href="#" className="hover:text-gray-300 transition">SERVICES</a>
          <a href="#" className="hover:text-gray-300 transition">GALLERY</a>
          <a href="#" className="hover:text-gray-300 transition">BOOK NOW</a> */}

          {/* 🌐 Social Icons */}
          <div className="flex justify-end space-x-6 mt-6 text-2xl">
            <a href="#" className="hover:text-gray-300 transition">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              <i className="fab fa-x-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
