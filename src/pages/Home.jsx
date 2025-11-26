import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard"
import Loader from "../components/Loader";
import { useState } from "react";

export default function Home() {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, SetError] = useState("");

  const handleSearch = async (query) => {
    try {
      setLoading(true);
      SetError("");

      const response = await fetch( `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&s=${query}`);
      const data = await response.json();
      if (data.Response === "False") {
        SetError(data.Error);
        setMovies([]);
      }
      setMovies(data.Search);

    } catch (error) {
      SetError("An error occurred while fetching data.");
    }finally{
      setLoading(false);
    }
  };



  return (
    <main className="container">
      <h1>Movie Search</h1>

      <SearchBar onSearch={handleSearch} />

      {loading && <Loader />}
      {error && <p className="error">{error}</p>}

      <section className="grid">
        {movies.length === 0 && !loading && !error && <p>No movies yet</p>}

        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </section>
    </main>
  );
}