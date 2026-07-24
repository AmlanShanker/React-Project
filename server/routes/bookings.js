const express = require("express");

const router = express.Router();

let bookings = [];

router.post("/", (req, res) => {
  const booking = {
    bookingId: bookings.length + 1,
    customerName: req.body.customerName,
    movieName: req.body.movieName,
    tickets: req.body.tickets,
    bookingDate: new Date(),
  };

  bookings.push(booking);

  res.status(201).json({
    message: "Booking successful",
    booking: booking,
  });
});

router.get("/", (req, res) => {
  res.json(bookings);
});

module.exports = router;
