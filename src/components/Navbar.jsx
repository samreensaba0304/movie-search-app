import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";


function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="nav">
      <h2 className="logo">MovieApp</h2>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
