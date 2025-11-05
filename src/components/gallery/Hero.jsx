import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center text-white flex flex-col justify-center items-start px-10"
      style={{
        backgroundImage: "url('/image/tatto img.jpg')", 
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-2xl">
        <h1 className="text-6xl font-extrabold uppercase mb-6 tracking-wide">
          Gallery
        </h1>
        <p className="text-lg leading-relaxed text-gray-300">
          Explore our Gallery to discover stunning tattoos created by our talented artists.
          From intricate designs to unique placements, our portfolio showcases the
          creativity we bring to life.
        </p>
      </div>

      {/* ----------------------------
          SIDE NAVIGATION (commented out)
      -----------------------------
      <div className="absolute right-10 top-1/3 flex flex-col gap-4 text-right text-lg tracking-widest">
        {["ARTISTS", "SERVICES", "GALLERY", "BOOK NOW"].map((item) => (
          <a
            key={item}
            href="#"
            className="hover:text-gray-400 transition-colors duration-200"
          >
            {item}
          </a>
        ))}
      </div>
      ----------------------------- */}

      {/* Social Icons */}
      <div className="absolute bottom-10 right-10 flex gap-5">
        <a href="#" className="hover:opacity-70 transition">
          <i className="fa-brands fa-facebook-f text-xl"></i>
        </a>
        <a href="#" className="hover:opacity-70 transition">
          <i className="fa-brands fa-instagram text-xl"></i>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
