import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter} from "react-router-dom";
import "./index.css";
import { FavoritesProvider } from "./context/FavoritesContext.jsx";
import { ThemeProvider } from "./context/ThemeContext";


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <FavoritesProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </FavoritesProvider>
  </BrowserRouter>
)