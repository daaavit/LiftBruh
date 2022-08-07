import styled from "styled-components";

export const LandingSectionBox = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;

`

export const StepsBox = styled.div`
    display: flex;
    align-items: center;
    height: 20%;
    width: 100%;
    max-height: 170px;

`

export const UniStep = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 90%;
    width: 15%;

`

export const TimeLine = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 1%;
    width: 7%;
    background: lightgray;

`


export const FirstNumbersForStep = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    height: 65%;
    width: 40%;
    color: black;
    max-width: 85px;
    max-height: 85px;
    border-radius: 200px;
    border: 0.7px solid black;


`

export const NumbersForStep = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    height: 65%;
    width: 40%;
    color: white;
    max-width: 85px;
    max-height: 85px;
    background: lightgray;
    border-radius: 200px;
    border: 0.7px solid lightgray;


`

export const TextForSeps = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20%;
    width: 95%;
    font-size: 1.2em;
    color: lightgray;


`

export const FirstTextForSeps = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20%;
    width: 95%;
    font-size: 1.2em;
    color: black;


`

export const FindOnMapWrapper = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    background: pink;

`

export const ZipAndResultBox = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 50%;
   

`

export const MapBox = styled.div`
    display: flex;
    height: 100%;
    width: 50%;

`

export const ZipInputArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50%;
    width: 100%;
    background: #9CC4B2;
 

`

export const ResultArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    color: white;
    height: 50%;
    width: 100%;
    background: #153B50;

`

export const Result = styled.div`
    display: flex;
    flex-direction: column;
    height: 30%;
    width:  80%;
    background: #153B50;
    cursor: pointer;
    box-shadow: 3px 3px 5px #000000, -3px -3px 5px #B2A9A9;
    border: 0.5px #6F3333 solid;
    border-radius: 20px;

    :hover {
        box-shadow: inset -3px -3px 5px #B2A9A9,   inset 3px 3px 5px  #000000 !important;
        border-radius: 20px;
       
    }

`

export const ResultHeading = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0px 0px 20px;
    height: 25%;
    width: 60%;
    font-size: 1.5em;
    font-weight: bold;
    letter-spacing: 0.1em;
    color: white;
`

export const ResultAdress = styled.div`
    display: flex;
    align-items: center;
    height: 15%;
    width: 60%;
    font-size: 1em;
    font-weight: light;
    letter-spacing: 0.1em;
    color: white;
    margin: 10px 0px 0px 20px;
`

export const IconWithPhone = styled.div`
    display: flex;
    align-items: center;
    height: 15%;
    width: 60%;
    font-size: 1em;
    font-weight: light;
    letter-spacing: 0.1em;
    color: white;
    margin: 10px 0px 0px 20px;
`



export const ZipHeading = styled.div`
    display: flex;
    align-items: center;
    height: 25%;
    font-size: 1.5em;
    font-weight: bold;
    letter-spacing: 0.2em;
    color: white;

`

export const ZipInfo = styled.div`
    display: flex;
    align-items: center;
    height: 15%;
    font-size: 0.8em;
    font-weight: light;
    letter-spacing: 0.1em;
    color: white;


`

export const ZipInputBox = styled.div`
    display: flex;
    align-items: center;
    height: 15%;
    width: 80%;


`

export const Input = styled.input`
    display: flex;
    font-size: 1.5em;
    font-weight: bold;
    letter-spacing: 0.2em;
    height: 70%;
    width: 70%;
    border-radius: 10px 0px 0px 10px;
    border: none;
    background: white;


    ::placeholder {
        letter-spacing: 0;
        color: lightgray;
        font-size: 1em;

    }



`

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5em;
    height: 73%;
    width: 30%;
    border-radius: 0px 10px 10px 0px;
    border: 0.5px solid lightgray;
    color: white;
    font-weight: bold;
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