import './HeaderLogo.css';
import logo from './assets/CINETREX.png';

function HeaderLogo() {
    return (
        <div className="Header-logo">
            <img src={logo}></img> 
            {/* <p>CINETREX</p> */}
        </div>
    );
}

export default HeaderLogo;