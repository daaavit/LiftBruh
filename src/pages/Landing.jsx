import React from "react";
import { LandingWrapper } from "../ Styles/Landing.Styles";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Membership from '../pages/Membership'
import LandingSection from "../components/LandingSections";
import SideBar2 from "../components/SideBar";
import SignIn from '../pages/SignIn'


const Landing = () => {
  return (<>
    <LandingWrapper>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/findclub" element={<LandingSection />} />
        <Route exact path="/membership" element={<Membership />} />
        <Route exact path="/signin" element={<SignIn />} />
      </Routes>
    </LandingWrapper>
    </>
  );
};

export default Landing;
