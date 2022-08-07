import React from "react";
import { LandingWrapper } from "../ Styles/Landing.Styles";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Membership from '../pages/Membership'
import LandingSection from "../components/LandingSections";
import SideBar2 from "../components/SideBar";



const Landing = () => {
  return (<>
  <SideBar2/>
    <LandingWrapper>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/findclub" element={<LandingSection />} />
        <Route exact path="/membership" element={<Membership />} />
      </Routes>
    </LandingWrapper>
    </>
  );
};

export default Landing;
