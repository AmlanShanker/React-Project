import { useState } from "react";
import api from "../services/api";

const Booking = ({ movie }) => {
  const [formData, setFormData] = useState({
    customerName: "",
    tickets: 1,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const bookingData = {
        customerName: formData.customerName,
        movieName: movie.title,
        tickets: formData.tickets,
      };

      const response = await api.post("/bookings", bookingData);

      alert(response.data.message);

      setFormData({
        customerName: "",
        tickets: 1,
      });
    } catch (error) {
      console.log(error);
      alert("Booking failed");
    }
  };

  return (
    <div className="mt-5 bg-slate-900 p-5 rounded-xl">
      <h3 className="text-xl font-bold mb-4">Book {movie.title}</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="customerName"
          placeholder="Enter your name"
          value={formData.customerName}
          onChange={handleChange}
          className="w-full p-3 mb-3 rounded bg-slate-700 text-white"
          required
        />

        <input
          type="number"
          name="tickets"
          min="1"
          value={formData.tickets}
          onChange={handleChange}
          className="w-full p-3 mb-3 rounded bg-slate-700 text-white"
          required
        />

        <button
          type="submit"
          className="bg-red-600 px-5 py-2 rounded hover:bg-red-700"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default Booking;
