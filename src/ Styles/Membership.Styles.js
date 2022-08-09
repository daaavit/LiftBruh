import styled from "styled-components";
import {Location} from '@styled-icons/entypo/Location'
import {Dumbbell} from '@styled-icons/fa-solid/Dumbbell'




export const MembershipWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    width: 100vw;

    @media(max-width: 750px) {
        display: flex;
        height: 130vh;
    }



`

export const HeadingWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    height: 30vh;
    width: 50vw;
    margin-left: 15%;
    
    @media(max-width: 750px) {
        display: flex;
        width: 100%;
        margin-left: 0%
    }


`

export const Heading = styled.div`
    display: flex;
    font-size: 2em;
    font-weight: bold;
    letter-spacing: 0.1em;
    align-items: center;
    justify-content: center;
    height: 30%;
    width: 80%;
    color: white;
    

    @media(max-width: 750px) {
        display: flex;
        font-size: 1.8em;
        width: 90%;
    }

  

`
export const ChoosenLocaiton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50%;
    width: 80%;
    border-radius: 50px;
    border: 1px solid lightgray;


   
    :hover {
        box-shadow: inset 0 0 0 150px #D80286;
        -webkit-transition: ease-out 0.8s;
        -moz-transition: ease-out 0.8s;
         transition: ease-out 0.8s;
      }

      @media(max-width: 750px) {
        display: flex;
        width: 95%;
    }


`   

export const LocationText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5em;
    height: 80%;
    width: 70%;
    color: #8D82C4;

    @media(max-width: 750px) {
        display: flex;
        font-size: 1.2em;
    }
`   

export const LocationIcon = styled(Location)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60%;
    width: 20%;
    border-right: 1px solid lightgray;
    color: white;

    @media(max-width: 750px) {
        display: flex;
        font-size: 1em;
        width: 20%;
        height: 50%;
    }
`   



export const PromoCode = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5em;
    font-weight: bold;
    height: 15%;
    width: auto;
    border-bottom: 2px solid #8D82C4;
    color: white;


`

export const CardsWrapper = styled.div`
      display: flex;
      align-items: center;
      height: 100vh;
      width: 100vw;
      border-radius: 20px;
   

      @media(max-width: 750px) {
        display: flex;
        border-radius: 0;
      }
`


export const VideoWrapper = styled.video`
    display: flex;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -1;
`

export const Card = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      height: 80%;
      width: 35%;
      max-height: 650px;
      max-width: 350px;
      background: #8D82C4;
      border-radius: 20px;
      margin: 0% 2% 0% 15%;
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