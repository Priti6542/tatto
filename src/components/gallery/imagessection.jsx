import React, { useState } from "react";

const images = [
  "/image/Amelia-Portfolio-1.jpg",
  "/image/Amelia-Portfolio-19 (1).jpg",
  "/image/Vicki-Portfolio-10.jpg",
  "/image/Bill-Portfolio-1.jpg",
  "/image/Bill-Portfolio-8.jpg",
  "/image/Bill-Portfolio-9.jpg",
  "/image/Gerald-Portfolio-6.jpg",
  "/image/Iliona-Portfolio-2.jpg",
  "/image/Kylie-Portfolio-6.jpg",
  "/image/Miguel-7.jpg",
  "/image/Vicki-Portfolio-10.jpg",
  "/image/Vicki-Portfolio-12.jpg",
  "/image/Zahi-7.jpg",
  "/image/Zahi-9.jpg",
  "/image/Bill-Portfolio-9.jpg",
];

const ImageSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="bg-[#1f1f1f] min-h-screen px-4 sm:px-6 py-12">
      <h2 className="text-white text-3xl sm:text-4xl font-bold mb-8 text-center">
        ELITE TATTOO STUDIOS
      </h2>

      {/* Responsive Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(src)}
            className="cursor-pointer overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              src={src}
              alt={`Tattoo ${index + 1}`}
              className="w-full h-auto object-cover aspect-square"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Modal / Lightbox */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
        >
          <div className="relative max-w-5xl w-full">
            <img
              src={selectedImage}
              alt="Selected Tattoo"
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg mx-auto"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white text-black px-3 py-1 rounded font-bold shadow"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageSection;

