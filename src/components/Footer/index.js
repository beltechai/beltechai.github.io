import React from "react";
import {
  BeltechLogoContainer,
  BeltechText,
  Container,
  CopyRightText,
  CopyRightText2,
  FollowUsContainer,
  FollowUsImageContainer,
  FollowUsText,
  FooterMenuContainer,
  Image,
  Line,
  Line2,
  Logo,
  MainContainer,
  MenuContainer,
  MenuItem,
  TermAndConditionContainer,
  TermAndConditionContainer2,
  TNC,
  TNC2,
  TNCLink,
  TNCLink2,
} from "./style";
import logo from "../../assets/Beltech.png";
import linkedin from '../../assets/linkedin.png';
import instagram from '../../assets/instagram.png';
import angellist from '../../assets/angellist.png'

const Footer = () => {
  return (
    <MainContainer>
      <Container>
        <BeltechLogoContainer>
          <Logo src={logo} />
          <BeltechText>Beltech AI</BeltechText>
        </BeltechLogoContainer>
        <FooterMenuContainer>
          <MenuContainer>
            <MenuItem to="/">
                Home
            </MenuItem>
            <MenuItem to="/product">
                Products
            </MenuItem>
            <MenuItem to="/#impact">
                Impact
            </MenuItem>
            <MenuItem to="/team">
                Team
            </MenuItem>
            <MenuItem to="/#aboutUs">
                AboutUs
            </MenuItem>
            <MenuItem to="/contactus">
                Contact Us
            </MenuItem>
          </MenuContainer>
          <FollowUsContainer>
            <FollowUsText>Follow us</FollowUsText>
            <FollowUsImageContainer>
            <a href="https://www.linkedin.com/company/beltechai/mycompany/" target="_blank">
            <Image src={linkedin}/>
            </a> 
            <a href="https://angel.co/company/beltechai" target="_blank">
                <Image src={angellist}/>
            </a>
            </FollowUsImageContainer>
          </FollowUsContainer>
        </FooterMenuContainer>
        <Line></Line>
        <TermAndConditionContainer>
            <TNC>
                <TNCLink to="/T&C">{`Terms & conditions`}</TNCLink>
                <TNCLink to="/privacyPolicy">Privacy policy</TNCLink>
            </TNC>
            <CopyRightText>Beltech Artficial Intelligence Pvt. Ltd. 2021</CopyRightText>
        </TermAndConditionContainer>
        <TermAndConditionContainer2>
          <TNC2>
            <TNCLink2 to="/T&C">{`Terms & conditions`}</TNCLink2>
            <TNCLink2 to="/privacyPolicy">Privacy policy</TNCLink2>
          </TNC2>
          <Line2></Line2>
          <CopyRightText2>Beltech Artficial Intelligence Pvt. Ltd. 2021</CopyRightText2>
        </TermAndConditionContainer2>
      </Container>
    </MainContainer>
  );
};

export default Footer;
