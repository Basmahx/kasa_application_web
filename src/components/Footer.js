import "../styles/Footer.css";
import logo from "../assets/LOGO_Footer.png";


const Footer = () => {
    return (
        <footer className="footer">
            <div>
               <img src={logo} alt='logo' /> 
            </div>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
};

export default Footer;

