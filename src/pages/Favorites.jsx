import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const { favorites } = useContext(FavoritesContext);

  if (favorites.length === 0) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "40px" }}>
        No favorites added yet.
      </h2>
    );
  }

  return (
    <main className="container">
      <div className="movie-grid">
        <section className="grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.imdbID} />
          ))}
        </section>
      </div>
    </main>
  );
}

export default Favorites;
