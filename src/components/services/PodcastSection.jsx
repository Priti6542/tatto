import React from "react";

const podcasts = [
    {
        title: "Custom Tattoos",
        description: "Our artists collaborate closely with you to create personalized tattoo designs that reflect your personality, story, and aesthetic preferences. Whether you desire bold traditional motifs or delicate fine-line artwork, we deliver exquisite creations that exceed expectations.",
        videoUrl: "/videos/video1.mp4",
        // date: "2024-10-10",
    },
    {
        title: "Piercing Services",
        description: "We provide safe and hygienic piercing services using brand-new needles and sterile equipment. Our diverse collection of high-quality jewelry allows you to express yourself with confidence while maintaining optimum safety.",
        videoUrl: "/videos/video2.mp4",
        // date: "2024-10-22",
    },
];


const PodcastSection = () => (
    <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-5 max-w-7xl">
            <h2 className="text-5xl font-extrabold text-center mb-12 uppercase tracking-wider">
                Podcast & Videos
            </h2>
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                {podcasts.map(({ title, description, videoUrl, date }) => (
                    <div key={title} className="bg-gray-800 rounded-xl p-6 shadow-lg">
                        <div className="aspect-video mb-6 rounded-lg overflow-hidden shadow-inner">
                            <video
                                controls
                                className="w-full h-full object-cover"
                                src={videoUrl}
                            >
                                Sorry, your browser does not support embedded videos.
                            </video>
                        </div>
                        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
                        <p className="text-gray-300 mb-3">{description}</p>
                        <div className="text-sm text-gray-500">{date}</div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);


export default PodcastSection;
