import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="Nav-bar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/popular">Popular</Link>
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
