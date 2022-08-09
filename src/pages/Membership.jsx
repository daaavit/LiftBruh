import { React, useState, useEffect } from "react";
import {
  MembershipWrapper,
  HeadingWrapper,
  Heading,
  ChoosenLocaiton,
  PromoCode,
  LocationText,
  LocationIcon,
  CardsWrapper,
  Card,
  CardsHeading,
  DumbelIcon,
  Info,
  PricingBox,
  Price,
  PriceText,
  Button,
} from "../ Styles/Membership.Styles";
import SideBar from "../components/SideBar";
import HamMenu from "../components/HamMenu";
import SliderCard from "../components/SiderCards";
import SliderCards from "../components/SiderCards";

const Membership = () => {
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

  const BackieVideo = () => {
    return (
      <video
        data-testid="video-asset"
        style={{ width: "100%", height: "100%" }}
        src="https://media.istockphoto.com/videos/man-using-the-kettlebell-video-id1091704926"
        alt="Man using the kettlebel"
        controls={false}
        controlsList="nodownload"
        autoPlay={true}
        loop={true}
      ></video>
    );
  };

  const [height, width] = useWindowSize();

  return (
    <>
      {width < 750 ? <HamMenu /> : <SideBar />}
      <MembershipWrapper>
        <HeadingWrapper>
          <Heading>PLANS AND PRICING</Heading>
          <ChoosenLocaiton>
            <LocationIcon />
            <LocationText>Brooklyn(Downtown) ></LocationText>
          </ChoosenLocaiton>
          <PromoCode>Have a Promo Code?</PromoCode>
        </HeadingWrapper>
        <CardsWrapper>
          {width < 750 ? (
            <SliderCards />
          ) : (
            <>
              <Card>
                <CardsHeading>Gym Bruh</CardsHeading>
                <Info>Best for gym buddies</Info>
                <DumbelIcon />
                <PricingBox>
                  <Price>$35</Price>
                  <PriceText>Unlimited/ Per Month</PriceText>
                </PricingBox>
                <Button>Buy</Button>
              </Card>

              <Card>
                <CardsHeading>Summer Bruh</CardsHeading>
                <Info>for summer bruhs</Info>
                <DumbelIcon />
                <PricingBox>
                  <Price>$20</Price>
                  <PriceText>12 Times/ Per Month</PriceText>
                </PricingBox>
                <Button>Buy</Button>
              </Card>
              <Card>
                <CardsHeading>Scrolling Bruh</CardsHeading>
                <Info>just for memebership</Info>
                <DumbelIcon />
                <PricingBox>
                  <Price>$75</Price>
                  <PriceText>Unlimited/ Per Month</PriceText>
                </PricingBox>
                <Button>Buy</Button>
              </Card>
            </>
          )}
        </CardsWrapper>
      </MembershipWrapper>
    </>
  );
};

export default Membership;
