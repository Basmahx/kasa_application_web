import { NavLink } from "react-router-dom";
import logo from "../assets/LOGO.png";
import mobileLogo from "../assets/LOGO_mobile.png";
import styled from "styled-components";

// styled Components
const HeaderWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin-top: 40px;
  margin-bottom: 40px;
  margin-inline: auto;

  @media screen and (max-width: 600px) {
    width: 95%;
    margin-top: 25px;
    margin-bottom: 25px;
  }
`;

const Logo = styled.picture`
  img {
    width: 210.32px;
    height: 68px;

    @media screen and (max-width: 600px) {
      width: 145px;
      height: 46.88px;
    }
  }
`;

const NavList = styled.div`
  display: flex;
  gap: 25px;

  a {
    color: black;
    text-decoration: none;
    font-size: 24px;

    @media screen and (max-width: 600px) {
      font-size: 12px;
    }
  }
  .active {
    text-decoration: underline;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo>
        <source srcSet={mobileLogo} media="(max-width: 600px)" />
        <img src={logo} alt="logo" />
      </Logo>

      <NavList>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}>
          Accueil
        </NavLink>
        <NavLink
          to="/About"
          className={({ isActive }) => (isActive ? "active" : "")}>
          A Propos
        </NavLink>
      </NavList>
    </HeaderWrapper>
  );
};

export default Header;
