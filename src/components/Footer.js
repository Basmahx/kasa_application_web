import styled from "styled-components";
import logo from "../assets/LOGO_Footer.png";

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 200px;
  background-color: black;
  color: white;
  justify-content: center;

  @media screen and (max-width: 600px) {
    height: 209px;
  }
`;

const LogoWrapper = styled.div`
  img {
    margin-bottom: 0;
    width: 122px;
    height: 39.44px;

    @media screen and (max-width: 600px) {
      margin: 0;
      height: 36px;
    }
  }
`;

const Text = styled.p`
  font-size: 24px;
  font-family: Montserrat;

  @media screen and (max-width: 600px) {
    font-size: 12px;
    margin-left: 140px;
    margin-right: 140px;
    text-align: center;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <LogoWrapper>
        <img src={logo} alt="logo" />
      </LogoWrapper>
      <Text>© 2020 Kasa. All rights reserved</Text>
    </FooterContainer>
  );
};

export default Footer;
