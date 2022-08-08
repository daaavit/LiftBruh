import { React, useState, useEffect } from "react";
import {
  LandingSectionBox,
  StepsBox,
  FindOnMapWrapper,
  ZipAndResultBox,
  MapBox,
  ZipInputArea,
  ResultArea,
  ZipHeading,
  ZipInfo,
  ZipInputBox,
  Input,
  Button,
  UniStep,
  NumbersForStep,
  FirstNumbersForStep,
  TextForSeps,
  FirstTextForSeps,
  TimeLine,
  Result,
  ResultHeading,
  ResultAdress,
  IconWithPhone,
} from "../ Styles/LandingSections.Styles";
import SideBar from "./SideBar2";
import HamMenu from "./HamMenu";

const LandingSection = () => {
  const useWindowSize = () => {
    const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
    useEffect(() => {
      const resizeHandler = () => {
        setSize([window.innerHeight, window.innerWidth]);
      };
      window.addEventListener("resize", resizeHandler);
      return () => {
        window.removeEventListener("resize", resizeHandler);
      };
    }, []);
    return size;
  };

  const [height, width] = useWindowSize();

  return (
    <>
      {width < 750 ? <HamMenu /> : <SideBar/>}
      <LandingSectionBox>
        <StepsBox>
          <UniStep>
            <FirstNumbersForStep>1</FirstNumbersForStep>
            <FirstTextForSeps>Location</FirstTextForSeps>
          </UniStep>
          <TimeLine />
          <UniStep>
            <NumbersForStep>2</NumbersForStep>
            <TextForSeps>Plan</TextForSeps>
          </UniStep>
          <TimeLine />
          <UniStep>
            <NumbersForStep>3</NumbersForStep>
            <TextForSeps>Info</TextForSeps>
          </UniStep>
          <TimeLine />
          <UniStep>
            <NumbersForStep>4</NumbersForStep>
            <TextForSeps>Payment</TextForSeps>
          </UniStep>
          <TimeLine />
          <UniStep>
            <NumbersForStep>5</NumbersForStep>
            <TextForSeps>Checkout</TextForSeps>
          </UniStep>
        </StepsBox>
        <FindOnMapWrapper>
          <ZipAndResultBox>
            <ZipInputArea>
              <ZipHeading>FIND CLUB NEAR YOU</ZipHeading>
              <ZipInfo>
                To find a Club, use the search bar, navigate using the map, or
                turn on location services.
              </ZipInfo>
              <ZipInputBox>
                <Input placeholder="Zip Code" />
                <Button>Search</Button>
              </ZipInputBox>
            </ZipInputArea>
            <ResultArea>
              <Result>
                <ResultHeading>Planet Fitness</ResultHeading>
                <ResultAdress>66 Boerum Pl, Brooklyn, NY 11201</ResultAdress>
                <IconWithPhone>111-222-3333</IconWithPhone>
              </Result>
              <Result>
                <ResultHeading>Gold Gym</ResultHeading>
                <ResultAdress>70 Bedford Pl, Brooklyn, NY 11001</ResultAdress>
                <IconWithPhone>333-444-5555</IconWithPhone>
              </Result>
            </ResultArea>
          </ZipAndResultBox>
          <MapBox>
            <iframe
              style={{ width: "100%", height: "450", style: "border:0" }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAhFRbqq2pa7Bdl8MQ0l8WeWS4okDykoFA
    &q=planet,Brooklyn+NY"
            ></iframe>
          </MapBox>
        </FindOnMapWrapper>
      </LandingSectionBox>
    </>
  );
};

export default LandingSection;
