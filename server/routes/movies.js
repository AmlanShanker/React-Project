const express = require("express");

const router = express.Router();

const movies = [
  {
    id: 1,
    title: "Avengers: Doomsday",
    genre: "Action",
    rating: 4.8,
    price: 250,
    poster:
      "https://image.tmdb.org/t/p/original/cWXtJhrlruF8CeYuaBGE8vdj3Q9.jpg",
  },
  {
    id: 2,
    title: "Dune: Messiah",
    genre: "Sci-Fi",
    rating: 4.7,
    price: 300,
    poster:
      "https://image.tmdb.org/t/p/original/fsttvmDGV5Z7iBvA7E3p5CoP8MW.jpg",
  },
  {
    id: 3,
    title: "Spider-Man: Brand New Day",
    genre: "Action",
    rating: 4.9,
    price: 280,
    poster:
      "https://image.tmdb.org/t/p/original/jYELt7NFLc1eiOdEC1zmkeCrlZo.jpg",
  },
  {
    id: 4,
    title: "The Odyssey",
    genre: "Adventure",
    rating: 4.6,
    price: 220,
    poster:
      "https://image.tmdb.org/t/p/original/5rhTDKUhPYvpdQIijFIs5VoWsON.jpg",
  },
];

router.get("/", (req, res) => {
  res.json(movies);
});

module.exports = router;
