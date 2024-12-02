import { Link } from "react-router-dom";
import logo from "../assets/LOGO.png";
import mobileLogo from "../assets/LOGO_mobile.png";
import "../styles/index.css";

const Header = () => {
  return (
    <nav className="header">
      <picture className="logo">
        <source srcSet={mobileLogo} media="(max-width: 600px)" />
        <img src={logo} alt="logo" />
      </picture>

      <div className="navList">
        <Link to="/">Accueil</Link>
        <Link to="/About">A Propos</Link>
      </div>
    </nav>
  );
};

export default Header;
