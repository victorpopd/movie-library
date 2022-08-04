import App from "./App";
import Genre from "./Genre/Genre";
import Movies from "./Movies/Movies";
import Country from "./Country/Country";
import TvSeries from "./TvSeries/TvSeries";

import { Routes, Route, BrowserRouter } from "react-router-dom";


export function AppRoutes() {
    return (
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<App />} />
        <Route path="/genre" element={<Genre />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/country" element={<Country />} />
        <Route path="/tvseries" element={<TvSeries />} />
        </Routes>
      </BrowserRouter>
    );
  }