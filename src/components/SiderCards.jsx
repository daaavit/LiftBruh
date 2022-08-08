import { React, useState } from "react";
import {
  SliderWrapper,
  LeftArrow,
  RightArrow,
  Card,
  IconLeft,
  IconRight,
  CardsHeading,
  Info,
  DumbelIcon,
  PricingBox,
  Price,
  PriceText,
  Button,
} from "../ Styles/SliderCard.Styles";

const SliderCards = () => {
  const [cardIndex, setCardIndex] = useState(0);

  const nextCard = () => {
    setCardIndex((prevIndex) => prevIndex + 1);
  };

  const prevCard = () => {
    setCardIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <>
      <SliderWrapper>
        <LeftArrow>
          <IconLeft />
        </LeftArrow>
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
        <RightArrow>
          <IconRight />
        </RightArrow>
      </SliderWrapper>
    </>
  );
};

export default SliderCards;
