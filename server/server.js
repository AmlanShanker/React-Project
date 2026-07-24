const express = require("express");
const cors = require("cors");

const movieRoutes = require("./routes/movies");
const bookingRoutes = require("./routes/bookings");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/movies", movieRoutes);
app.use("/bookings", bookingRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
