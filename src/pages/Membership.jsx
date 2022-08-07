import React from "react";
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

const Membership = () => {
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
