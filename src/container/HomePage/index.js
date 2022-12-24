import React, { useEffect } from "react";
import Home from "../../components/Home";
import Carrer from "../../components/Carrer";
import Footer from "../../components/Footer";
import OpenSource from "../../components/OpenSource";
import AboutUs from "../../components/AboutUs";
import ZeroCost from "../../components/ZeroCost";
import Impact from "../../components/Impact";
import OurProducts from "../../components/OurProducts";
import { useLocation } from "react-router-dom";

const HomePage = () => {
    const location = useLocation();


  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <div>
      <Home />
      <OurProducts />
      <div id="aboutUs">
      <AboutUs />
      </div>
      <ZeroCost />
      <div id="impact">
      <Impact />
      </div>
      <OpenSource />
      <Carrer />
    </div>
  );
};

export default HomePage;
