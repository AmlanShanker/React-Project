import React from "react";
import { useState } from "react";
import Booking from "./Booking";
const MovieCard = ({ movie }) => {
  const [showBooking, setShowBooking] = useState(false);
  return (
    <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">
      <img
        src={movie.poster}
        alt={movie.title}
        className="w-full h-80 object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-bold">{movie.title}</h2>

        <p className="text-gray-400">{movie.genre}</p>

        <div className="flex justify-between mt-3">
          <span>⭐ {movie.rating}</span>

          <span className="text-red-500 font-bold">₹{movie.price}</span>
        </div>

        <button
          onClick={() => setShowBooking(!showBooking)}
          className="w-full mt-5 bg-red-600 py-2 rounded"
        >
          Book Now
        </button>
        {showBooking && <Booking movie={movie} />}
      </div>
    </div>
  );
};

export default MovieCard;
