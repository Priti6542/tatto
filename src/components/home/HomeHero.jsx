// src/components/home/HeroSection.jsx
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function HeroSection() {
    const [visibleImages, setVisibleImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Tattoo images with metadata
    const tattooData = [
        {
            image: '/images/homehero1.jpg',
            title: 'Spider Tattoo',
            artist: 'Back Piece',
            style: 'Blackwork'
        },
        {
            image: '/images/homehero2.jpg',
            title: 'Dragon Sleeve',
            artist: 'Arm Design',
            style: 'Traditional'
        },
        {
            image: '/images/homehero3.png',
            title: 'Portrait',
            artist: 'Realism',
            style: 'Portrait'
        },
        {
            image: '/images/homehero4.jpg',
            title: 'Sword Design',
            artist: 'Leg Piece',
            style: 'Geometric'
        },
        {
            image: '/images/homehero5.jpg',
            title: 'Skull & Bones',
            artist: 'Chest Piece',
            style: 'Traditional'
        },
        {
            image: '/images/homehero6.jpg',
            title: 'Minimal Line',
            artist: 'Forearm',
            style: 'Minimalist'
        },
        {
            image: '/images/homehero7.jpg',
            title: 'Abstract Art',
            artist: 'Back Design',
            style: 'Abstract'
        },
    ];

    // Sequential reveal animation
    useEffect(() => {
        tattooData.forEach((_, index) => {
            setTimeout(() => {
                setVisibleImages(prev => [...prev, index]);
            }, index * 300);
        });
    }, []);

    // Auto-rotate center image
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % tattooData.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen bg-black text-white overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-radial from-gray-900 via-black to-black"></div>
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-gray-800 rounded-full filter blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-800 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
                </div>
            </div>

            {/* 3D Carousel of Images */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                <div className="relative w-full max-w-7xl h-96 preserve-3d">
                    {tattooData.map((tattoo, index) => {
                        const position = (index - currentIndex + tattooData.length) % tattooData.length;
                        const isVisible = visibleImages.includes(index);

                        return (
                            <div
                                key={index}
                                className={`absolute top-2/2 left-1/2 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'
                                    }`}
                                style={{
                                    transform: `
                    translate(-50%, -50%)
                    translateX(${(position - 3) * 280}px)
                    translateY(${Math.abs(position - 3) * 30}px)
                    scale(${position === 3 ? 1.2 : 0.85})
                    rotateY(${(position - 3) * 15}deg)
                  `,
                                    zIndex: position === 3 ? 10 : 5 - Math.abs(position - 3),
                                    filter: position === 3 ? 'none' : 'brightness(0.6)',
                                }}
                            >
                                {/* Card with text overlay */}
                                <div className="w-48 h-64 md:w-56 md:h-72 bg-white rounded-lg overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 group">
                                    {/* Image */}
                                    <div className="relative w-full h-full">
                                        <img
                                            src={tattoo.image}
                                            alt={tattoo.title}
                                            className="w-full h-full object-cover"
                                        />

                                        {/* Text Overlay at Top - Similar to reference image */}
                                        <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent p-4">
                                            <h3 className="text-white text-sm font-bold uppercase tracking-wide mb-1">
                                                {tattoo.title}
                                            </h3>
                                            <p className="text-gray-300 text-xs">
                                                {tattoo.artist}
                                            </p>
                                            <p className="text-gray-400 text-xs mt-1">
                                                {tattoo.style}
                                            </p>
                                        </div>

                                        {/* Hover effect - show more info */}
                                        {/* <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                            <div className="text-center">
                                                <p className="text-white text-sm font-semibold">View Details</p>
                                                <svg className="w-6 h-6 text-white mx-auto mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                </svg>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Dark overlay for text contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80"></div>

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-center px-4 pt-20  mt-[-190px]">
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-5xl font-bold mb-6 leading-tight animate-fadeIn">
                    <span className="block font-sans">Crafting Meaningful Tattoos</span>
                    <span className="block italic font-serif text-gray-100">with Passion and Precision.</span>
                </h1>

                {/* <p className="text-lg md:text-xl text-gray-300 mb-2 max-w-2xl animate-fadeIn delay-300">
                    Exclusive blackwork tattoos by appointment-only.
                </p>
                <p className="text-base md:text-lg text-gray-400 mb-12 max-w-2xl animate-fadeIn delay-500">
                    Where clean design meets permanent art.
                </p> */}

                {/* CTA Buttons */}
                {/* <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn delay-700">
                    <Link
                        to="/contact"
                        className="bg-white text-black px-10 py-4 text-sm uppercase tracking-widest font-bold hover:bg-gray-200 transition-all duration-300 hover:scale-105"
                    >
                        Book an Appointment
                    </Link>

                    <Link
                        to="/gallery"
                        className="bg-transparent border-2 border-white text-white px-10 py-4 text-sm uppercase tracking-widest font-bold hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
                    >
                        View The Flash Book
                    </Link>
                </div> */}
            </div>

            {/* Scroll Indicator */}
            {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
                <div className="flex flex-col items-center">
                    <span className="text-xs text-gray-400 uppercase tracking-wider mb-2">Scroll</span>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </div> */}
        </section>
    );
}

export default HeroSection;
