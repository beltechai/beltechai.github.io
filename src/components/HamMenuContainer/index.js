import React, { useEffect } from "react";
import { HamMenuContainer, CrossIcon, MenuContainer, MenuItem, Menu, UnderLine, HeadingContainer, BeltechLogoContainer } from "./style";
import { useMatch, useLocation } from "react-router-dom";
import CrossSvg from '../../assets/cross.svg';
import BeltechLogo from '../../assets/BeltechLogo.png';

const HamMenu = ({setHamMenu}) => {

  const location = useLocation();

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  const crossIconHandle = () => {
    setHamMenu((toggle) => {
        return (!toggle);
    });
    console.log("Cross Icon Clicked");
  }

  const closeMenu = () => {
    setHamMenu(false);
  }

  return (
    <HamMenuContainer>
      <HeadingContainer>
        <BeltechLogoContainer src={BeltechLogo}/>
        <CrossIcon src={CrossSvg} onClick={() => crossIconHandle()}/>
      </HeadingContainer>
        <MenuContainer>
          <MenuItem onClick={closeMenu}>
            <Menu to="/">Home</Menu>
            {useMatch("/") && !location.hash ? <UnderLine /> : <></>}
          </MenuItem>
          <MenuItem onClick={closeMenu}>
            <Menu to="/product">Product</Menu>
            {useMatch("/product") ? <UnderLine /> : <></>}
          </MenuItem>
          <MenuItem onClick={closeMenu}>
            <Menu to="/#aboutUs">About Us</Menu>
            {location.hash === "#aboutUs" ? <UnderLine /> : <></>}
          </MenuItem>
          <MenuItem onClick={closeMenu}>
            <Menu to="/#impact">Impact</Menu>
            {location.hash === "#impact" ? <UnderLine /> : <></>}
          </MenuItem>
          <MenuItem onClick={closeMenu}>
            <Menu to="/career">Career</Menu>
            {useMatch("/career") ? <UnderLine /> : <></>}
          </MenuItem>
          <MenuItem onClick={closeMenu}>
            <Menu to="/team">Team</Menu>
            {useMatch("/team") ? <UnderLine /> : <></>}
          </MenuItem>
          <MenuItem onClick={closeMenu}>
            <Menu to="/contactus">Contact Us</Menu>
            {useMatch("/contactus") ? <UnderLine /> : <></>}
          </MenuItem>
        </MenuContainer>
    </HamMenuContainer>
  );
};

export default HamMenu;
