import React from "react";
import {
  HamMenuWrapper,
  LogoBox,
  NavBarBox,
  LinksTo,
} from "../ Styles/HamMenu.Styles";
import LiftLogo from "../assets/LiftLogo";

const HamMenu = () => {
  return (
    <HamMenuWrapper>
      <LogoBox to="/">
        <LiftLogo />
      </LogoBox>
      <NavBarBox>
        <LinksTo to='/findclub'>Find A Club</LinksTo>
        <LinksTo to='/membership'>Memebership</LinksTo>
        <LinksTo to='/signin'>Sign In</LinksTo>
      </NavBarBox>
    </HamMenuWrapper>
  );
};
export default HamMenu;
