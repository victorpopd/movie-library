import "./NavBar.css";
import { Link } from "react-router-dom";
import Genre from "../Main Pages/Genre/Genre";

function NavBar() {
  return (
    <div className="Nav-bar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/genre">Genre</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/country">Country</Link>
        </li>
        <li>
          <Link to="/tvseries">TV series</Link>
        </li>
      </ul>
    </div>
  );
}
export default NavBar;
