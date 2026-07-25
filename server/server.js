const express = require("express");
const cors = require("cors");

const movieRoutes = require("./routes/movies");
const bookingRoutes = require("./routes/bookings");

const app = express();

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.json({
    message: "CineVerse Backend is running 🚀",
  });
});
app.use("/movies", movieRoutes);
app.use("/bookings", bookingRoutes);

module.exports = app;

if (require.main === module) {
  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
