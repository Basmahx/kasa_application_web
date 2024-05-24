import { Link } from 'react-router-dom'
import logo from "../assets/LOGO.png";
import "../styles/Header.css"
 
const Header = () =>  {
    return (  
        <nav className='header'>
            <img src={logo} alt='logo' />
            <div className='navList'>
                <Link to="/">Accueil</Link>
                <Link to="/About">A Propos</Link>
            </div>
        </nav>
    )
}

export default Header;