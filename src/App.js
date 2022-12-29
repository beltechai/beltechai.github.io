import React, { Suspense, lazy } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactUs from "./container/ContactUs";
import ScrollToTop from "./components/ScrollToTop";
import SpinnerDiv from "./components/LoadingContainer";
import JobPage from "./container/JobPage";

//For detecting User agent
import {isMobile} from 'react-device-detect';

//Importing Component
const Home = lazy(() => import("./container/HomePage"));
const Carrer = lazy(() => import("./container/CarrerPage"));
const Team = lazy(() => import("./container/TeamPage/"));
const Product = lazy(() => import("./container/ProductPage"));
const Apply  = lazy(() => import("./container/ApplyPage"));
const PrivacyPolicy = lazy(() => import("./container/PrivacyPage"));
const TermsAndCondition = lazy(() => import("./container/TermAndConditionPage"));
const MobileTrafficManagement = lazy(() => import("./container/MobileTrafficManagement"));
const MobileSecurityPlatform = lazy(() => import("./container/MobileSecurityPlatform"));
const MobileTourismPlatform = lazy(() => import("./container/MobileTourismPlatform"));
const MobileProductPage = lazy(() => import("./container/MobileProductContainer"));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Suspense fallback={<div><SpinnerDiv /></div>}>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/career" element={<Carrer />} />
          <Route path="/job/:jobId" element={<JobPage />} />
          <Route path="/team" element={<Team />}/>
          <Route path="/contactus" element={<ContactUs />}/>
          <Route path="/product" element={isMobile ? <MobileProductPage/> : <Product />}/>
          <Route path="/apply" element={<Apply />}/>
          {isMobile && (<Route path="/trafficManagement" element={<MobileTrafficManagement />}/>)}
          {isMobile && (<Route path="/securityPlatform" element={<MobileSecurityPlatform />}/>)}
          {isMobile && (<Route path="/tourismPlatform" element={<MobileTourismPlatform />}/>)}
          <Route path="/privacyPolicy" element={<PrivacyPolicy />}/>
          <Route path="/T&C" element={<TermsAndCondition />}/>
      </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
