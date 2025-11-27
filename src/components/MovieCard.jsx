import { Link } from "react-router-dom";
import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";


export default function MovieCard({movie}) {

  const { favorites, addFavorite, removeFavorite } =
    useContext(FavoritesContext);

  const isFavorite = favorites.some((fav) => fav.imdbID === movie.imdbID);


  return (
    <div className="movie-card">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"}
        alt={movie.Title}
        className="poster"
      />
      <div className="movie-info">
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
        <p>{movie.Type}</p>
        <Link to={`/movie/${movie.imdbID}`} className="details-btn">
          View Details
        </Link>
        <button
          onClick={() =>
            isFavorite ? removeFavorite(movie.imdbID) : addFavorite(movie)
          }
          className="fav-btn"
        >
          {isFavorite ? "★ Remove Favorite" : "☆ Add to Favorites"}
        </button>
      </div>
    </div>
  );
}