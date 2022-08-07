import React from "react";
import {
  SideBarWrapper,
  LogoBox,
  MenuBox,
  UniMenuBox,
  TextBoxWithIcon,
} from "../ Styles/SideBar.Styles";
import LiftLogo from "../assets/LiftLogo";
import { FaMapPin } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { AiOutlineLogin } from "react-icons/ai";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <SideBarWrapper>
      <LogoBox to='/'>
        <LiftLogo />
      </LogoBox>
      <MenuBox>
        <UniMenuBox>
          <TextBoxWithIcon>
          <FaMapPin size={40} style={{ color: "#8D82C4" }} />
            <Link
              to="/findclub"
              style={{ textDecoration: "none", color: "white" }}
            >
              Find a Club
            </Link>
          </TextBoxWithIcon>
        </UniMenuBox>
        <UniMenuBox>
          <TextBoxWithIcon>
            <HiUserGroup size={40} style={{ color: "#8D82C4" }} />
            <Link
              to="/membership"
              style={{ textDecoration: "none", color: "white" }}
            >
              Membership
            </Link>
          </TextBoxWithIcon>
        </UniMenuBox>
        <UniMenuBox>
          <TextBoxWithIcon>
            <AiOutlineLogin size={40} style={{ color: "#8D82C4" }} />
            <Link
              to="/signin"
              style={{ textDecoration: "none", color: "white" }}
            >
              Sign In
            </Link>
          </TextBoxWithIcon>
        </UniMenuBox>
      </MenuBox>
    </SideBarWrapper>
  );
};

export default SideBar;
