import React from "react";
const Hero = () => {
  return (
    <section className=" h-87.5 flex items-center">
      <div className="max-w-7xl mx-auto px-8">
        <h1 className="text-5xl font-bold mb-4">
          Experience Movies Like Never Before
        </h1>

        <p className="text-lg text-gray-200 mb-8 max-w-xl">
          Discover the latest blockbusters, choose your favorite movie, and book
          your tickets instantly.
        </p>

        <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
          Explore Movies
        </button>
      </div>
    </section>
  );
};

export default Hero;
