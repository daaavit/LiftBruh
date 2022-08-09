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

  const ArrCards = [
    <Card>
      <CardsHeading>Gym Bruh</CardsHeading>
      <Info>Best for gym buddies</Info>
      <DumbelIcon />
      <PricingBox>
        <Price>$35</Price>
        <PriceText>Unlimited/ Per Month</PriceText>
      </PricingBox>
      <Button>Buy</Button>
    </Card>,
    <Card>
      <CardsHeading>Summer Bruh</CardsHeading>
      <Info>for summer bruhs</Info>
      <DumbelIcon />
      <PricingBox>
        <Price>$20</Price>
        <PriceText>12 Times/ Month</PriceText>
      </PricingBox>
      <Button>Buy</Button>
    </Card>,
    <Card>
      <CardsHeading>Scrolling Bruh</CardsHeading>
      <Info>just for memebership</Info>
      <DumbelIcon />
      <PricingBox>
        <Price>$75</Price>
        <PriceText>Unlimited</PriceText>
      </PricingBox>
      <Button>Buy</Button>
    </Card>,
  ];
  const nextCard = () => {
    setCardIndex((prevIndex) => prevIndex + 1);
  };

  const prevCard = () => {
    setCardIndex((prevIndex) => prevIndex - 1);
  };
  console.log(cardIndex);

  return (
    <>
      <SliderWrapper>
        <LeftArrow>
          {cardIndex === 0 ? <div></div> : <IconLeft onClick={prevCard} />}
        </LeftArrow>
        {cardIndex <= 3 ? ArrCards[cardIndex] : <div></div>}
        <RightArrow>
          {cardIndex !== ArrCards.length - 1 ? (
            <IconRight onClick={nextCard} />
          ) : (
            <div></div>
          )}
        </RightArrow>
      </SliderWrapper>
    </>
  );
};

export default SliderCards;
