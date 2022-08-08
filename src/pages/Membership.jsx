import {React, useState, useEffect} from "react";
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
import SideBar from '../components/SideBar'
import HamMenu from "../components/HamMenu";


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


  const [height, width] = useWindowSize();
  return (
    <>
    <SideBar/>
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
      </CardsWrapper>
    </MembershipWrapper>
    </>
  );
};

export default Membership;
