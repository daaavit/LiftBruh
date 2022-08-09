import styled from "styled-components";
import {Dumbbell} from '@styled-icons/fa-solid/Dumbbell'
import {ArrowRightCircle} from '@styled-icons/bootstrap/ArrowRightCircle'
import {ArrowLeftCircle} from '@styled-icons/bootstrap/ArrowLeftCircle'



export const SliderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70vh;
    width: 100vw;
    border-radius: 20px;
    
    @media(max-width: 750px) {
      display: flex;
      border-radius: 0;
    }

`

export const LeftArrow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80%;
    width: 20%;

`


export const RightArrow = styled.div`
    display: flex;
     align-items: center;
    justify-content: center;
    height: 80%;
    width: 20%;

`

export const Card = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      height: 80%;
      width: 55%;
      max-height: 650px;
      max-width: 350px;
      background: #8D82C4;
      border-radius: 20px;
    //   box-shadow: inset -2px -2px 4px #000000,   inset 2px 2px 7px  #C5C5C5 !important;

    background: rgba(116, 55, 55, 0.02);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(7.9px);
    -webkit-backdrop-filter: blur(7.9px);
    border: 1px solid rgba(116, 55, 55, 0.76);

      
`


export const CardsHeading = styled.div`
    display: flex;
    font-size: 1.5em;
    font-weight: bold;
    letter-spacing: 0.1em;
    align-items: center;
    justify-content: center;
    height: 10%;
    width: 90%;
    color: white;
    border-bottom: 1px dashed lightgray;


`

export const Info = styled.div`
    display: flex;
    font-size: 1em;
    font-weight: light;
    letter-spacing: 0.1em;
    align-items: center;
    justify-content: center;
    height: 5%;
    width: 90%;
    color: lightgray;

`


export const DumbelIcon = styled(Dumbbell)`
      display: flex;
      height: 20%;
      width: 50%;
      color: white;
      :hover {
      transition: transform .7s  ease-in-out;
      transform: rotate(360deg)
      }
`

export const PricingBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20%;
    width: 95%;
    border-bottom: 1px dashed lightgray;


`

export const Price = styled.div`
    display: flex;
    font-size: 3em;
    font-weight: bold;
    letter-spacing: 0.1em;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 50%;
    color: white;

`

export const PriceText = styled.div`
    display: flex;
    font-size: 1em;
    letter-spacing: 0.1em;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 50%;
    color: lightgray;

`

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10%;
    width: 60%;
    border-radius: 10px;
    border: none;
    font-size: 1.5em;
    font-weight: bold;
    letter-spacing: 0.1em;
    color: white;

    background: #153B50;

    letter-spacing: 0.1em;
    cursor: pointer;
    :hover {
        box-shadow: inset 400px 0 0 0 #D80286;
        -webkit-transition: ease-out 0.8s;
        -moz-transition: ease-out 0.8s;
         transition: ease-out 0.8s;
      }

`


export const IconLeft = styled(ArrowLeftCircle)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50%;
    width: 100%;
    color: white;
      

`


export const IconRight = styled(ArrowRightCircle)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50%;
    width: 100%;
    color: white;

`