import React from "react";
// import bgImage from "../../assets/bg-texture"; // optional background image

const TattoArtist = () => {
  return (
    <section
      className="relative text-white min-h-screen py-20 px-6 md:px-20"
      style={{
        // backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#111", // fallback color
      }}
    >
      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-12">ELITE TATTOO STUDIOS</h1>

        {/* Layout */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left Column - History */}
          <div>
            <h2 className="text-2xl font-bold mb-4">HISTORY</h2>
            <p className="mb-4 leading-relaxed text-gray-300">
              With over a decade of experience, Elite Tattoo Studios has become a cornerstone in the tattoo community. 
              What began as a modest studio with a deep passion for the art of tattooing has grown into a 
              well-respected space known for its commitment to creativity, professionalism, and client satisfaction.
            </p>
            <p className="mb-4 leading-relaxed text-gray-300">
              Our team of skilled artists brings nearly 50 years of combined expertise, with each artist specializing 
              in various styles—from traditional and fine line to intricate hyper-realism and neo-traditional designs. 
              This diversity ensures we can cater to every client’s vision, no matter how unique.
            </p>
            <p className="mb-4 leading-relaxed text-gray-300">
              We pride ourselves on high standards of safety and hygiene, using only brand-new needles and 
              thoroughly sanitizing stations after each session. Open daily from 12–8 pm, we welcome both appointments 
              and walk-ins, aiming to make every client feel valued and at ease in our studio.
            </p>
            <p className="leading-relaxed text-gray-300">
              At Elite Tattoo Studios, we’re committed to turning our clients’ ideas into lasting, meaningful works of art, 
              fostering a welcoming environment that celebrates individual expression and the art of tattooing.
            </p>
          </div>

          {/* Right Column - Vision & Mission */}
          <div className="space-y-10">
            <div className="border border-gray-500 p-6">
              <h3 className="text-xl font-bold mb-3">VISION</h3>
              <p className="text-gray-300 leading-relaxed">
                Our vision is to provide exceptional tattoo experiences, blending artistry with professionalism. 
                We’re dedicated to creating a safe, welcoming space where clients’ unique styles are brought to life.
              </p>
            </div>

            <div className="border border-gray-500 p-6">
              <h3 className="text-xl font-bold mb-3">MISSION</h3>
              <p className="text-gray-300 leading-relaxed">
                Our mission is to deliver high-quality, personalized tattoo services. 
                With a focus on safety, creativity, and client satisfaction, we aim to make each 
                experience memorable to individual expression.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TattoArtist;
