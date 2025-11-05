// src/components/home/StylesSection.jsx
import React from "react";
function StylesSection() {
  const styles = [
    {
      id: 1,
      title: 'Traditional',
      description: 'Bold lines, vibrant colors, and classic designs',
      icon: '⚓',
      image: '/images/stylesection1.jpg'
    },
    {
      id: 2,
      title: 'Blackwork',
      description: 'Pure black ink with geometric patterns',
      icon: '◆',
      image: '/images/stylesection2.jpg'
    },
    {
      id: 3,
      title: 'Realism',
      description: 'Lifelike portraits and detailed imagery',
      icon: '👁️',
      image: '/images/stylesection3.jpg'
    },
    {
      id: 4,
      title: 'Minimalist',
      description: 'Simple, clean lines with maximum impact',
      icon: '─',
      image: '/images/stylesection4.jpg'
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-wider">
            Our Styles
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From bold traditional to intricate blackwork, we specialize in diverse tattoo styles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {styles.map((style) => (
            <div 
              key={style.id}
              className="group relative bg-black text-white overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={style.image} 
                  alt={style.title}
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity"
                />
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 min-h-[300px] flex flex-col justify-between">
                <div>
                  <div className="text-5xl mb-4">{style.icon}</div>
                  <h3 className="text-2xl font-bold uppercase tracking-wide mb-3">
                    {style.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {style.description}
                  </p>
                </div>

                <div className="mt-4 inline-flex items-center text-sm uppercase tracking-wider font-semibold group-hover:translate-x-2 transition-transform">
                  Explore <span className="ml-2">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StylesSection;
