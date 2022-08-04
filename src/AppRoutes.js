import Home from "./Main Pages/Home/Home";
import Movies from "./Main Pages/Movies/Movies";
import Country from "./Main Pages/Country/Country";
import TvSeries from "./Main Pages/TvSeries/TvSeries";
import NavBar from "./NavBar/NavBar";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MoviePage from "./Main Pages/MoviePage/MoviePage";
import Popular from "./Main Pages/Popular/Popular";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <HeaderLogo />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/country" element={<Country />} />
        <Route path="/tvseries" element={<TvSeries />} />
        <Route path="/:id" element={<MoviePage />} />
      </Routes>
    </BrowserRouter>
  );
}
