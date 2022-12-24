import React, { useState, useRef, useEffect } from "react";
import {
  Container,
  MainContainer,
  ProductMenu,
  Menu,
  ProductContainer,
  UnderLine,
} from "./style";
import Product1 from "../../components/OurProducts/Product1";
import TrafficManagement from "../../components/TrafficManagement";
import TourismPlatform from "../../components/TourismPlatform";
import SecurityPlatform from "../../components/SecurityPlatform";
import { useLocation, useNavigate } from "react-router-dom";
import Colors from "../../styles/color";

const ProductPage = () => {
  const [active, setActive] = useState(0);
  const location = useLocation();
  
  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (location.hash.slice(1) === "trafficManagement") {
        setActive(0);
      } else if (location.hash.slice(1) === "security") {
        setActive(1);
      } else if (location.hash.slice(2) === "smartcity") {
        setActive(2);
      } else if (location.hash.slice(3) === "tourismplatform") {
        setActive(3);
      }
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);

  // For activating the link when user is scorlling
  useEffect(() => {

    const ScrollFunction = (active) => {
    const observable = {
      trafficManagement: document.querySelector("#trafficManagement"),
      security: document.querySelector("#security"),
      smartcity: document.querySelector("#smartcity"),
      tourismplatform: document.querySelector("#tourismplatform"),
    };
    const pos = {
      trafficManagement: observable.trafficManagement.getBoundingClientRect(),
      security: observable.security.getBoundingClientRect(),
      smartcity: observable.smartcity.getBoundingClientRect(),
      tourismplatform: observable.tourismplatform.getBoundingClientRect(),
    };

    if (
      pos.trafficManagement.top < window.innerHeight &&
      pos.trafficManagement.bottom >= 0
    ) {
        setActive(0);
    } else if (
      pos.security.top < window.innerHeight &&
      pos.security.bottom >= 0
    ) {
        setActive(1);
    } else if (
      pos.smartcity.top < window.innerHeight &&
      pos.smartcity.bottom >= 0
    ) {
        setActive(2);
    } else if (
      pos.tourismplatform.top < window.innerHeight &&
      pos.tourismplatform.bottom >= 0
    ) {
        setActive(3);
    }
  }

    window.addEventListener("scroll", ScrollFunction);
    return () => {
        window.removeEventListener("scroll", ScrollFunction);
    };
  }, []);

  return (
    <MainContainer>
      <Container>
        <ProductContainer>
          <ProductMenu>
            <Menu
              style={{ color: active === 0 ? Colors.primaryColor : "black" }}
              to="#trafficManagement"
            >
              Traffic management
              {active === 0 ? <UnderLine /> : <></>}
            </Menu>
            <Menu style={{color: active === 1 ? Colors.primaryColor: "black"}} to="#security">
                
                Security
            {active === 1 ? <UnderLine /> : <></>}    
            </Menu>
            {/* <Menu style={{color: active === 2 ? Colors.primaryColor: "black"}} to="#smartcity">
                
                Smart City
                {active === 2 ? <UnderLine /> : <></>}
                </Menu> */}
            <Menu style={{color: active === 3 ? Colors.primaryColor: "black"}} to="#tourismplatform">
                
                Tourism platform
                {active === 3 ? <UnderLine /> : <></>}
                </Menu>
          </ProductMenu>
        </ProductContainer>
        <div name="trafficManagement" id="trafficManagement">
            <TrafficManagement />
        </div>
        <div name="security" id="security">
          <SecurityPlatform/>
        </div>
        <div name="smartcity" id="smartcity">
          {/* <Product1 /> */}
        </div>
        <div name="tourismplatform" id="tourismplatform">
          <TourismPlatform />
        </div>
      </Container>
    </MainContainer>
  );
};

export default ProductPage;
