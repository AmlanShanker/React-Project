import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import MovieCard from "./components/MovieCard";
import api from "./services/api";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    api
      .get("/movies")
      .then((res) => setMovies(res.data))
      .catch((err) => console.log(err));
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <Navbar />
      <Hero />

      <SearchBar search={search} setSearch={setSearch} />

      <div className="max-w-7xl mx-auto px-8 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}

export default App;
