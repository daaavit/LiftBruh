import styled from "styled-components";

export const HomeWrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
    width: 100vw;
  

`
export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-height: 2900px;
    height: 290vh;

`


export const IntroBox = styled.div`
    display: flex;
    max-height: 400px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    width: 100%;
    height: 40vh;
    background: #8D82C4;
    

`

export const FirstIntroHeading = styled.div`
    display: flex;
    aling-items: center;
    justify-content: center;
    height:20%;
    width: 40%;
    font-size: 1.7em;
    font-weight: bold;
    letter-spacing: 0.1em;
    color: white;
    margin-left: 15%;
    border-bottom: 3px solid white;

`

export const FirstIntroText = styled.div`
    display: flex;
    aling-items: center;
    height:20%;
    width: 80%;
    font-size: 1em;
    letter-spacing: 0.1em;
    color: white;
    margin-left: 15%;

`



export const SecondIntroBox = styled.div`
     display: flex;
     max-height: 400px;
     flex-direction: column;
     align-items: flex-end;
     justify-content: space-evenly;
     width: 100%;
     height: 40vh;
     background: #9CC4B2;

`

export const SecondIntroHeading = styled.div`
    display: flex;
    aling-items: center;
    justify-content: center;
    height:20%;
    width: 40%;
    font-size: 1.7em;
    font-weight: bold;
    letter-spacing: 0.1em;
    color: white;
    margin-right: 4%;
    border-bottom: 3px solid white;

`
export const SecondIntroText = styled.div`
    display: flex;
    aling-items: center;
    height:20%;
    width: 80%;
    font-size: 1em;
    letter-spacing: 0.1em;
    color: white;
    margin-right: 4%;

`

export const TextWithVideo = styled.div`
    display: flex;
    width: 100%;
    height: 40vh;
    max-height: 400px;
    background: #153B50;

`

export const VideoArea = styled.div`
    display: flex;
    height: 100%;
    width: 30%;
    margin-left: 15%;


`

export const TextForVideo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: 60%;
`

export const VideoHeading = styled.div`
    display: flex;
    aling-items: center;
    justify-content: center;
    height:20%;
    width: 80%;
    font-size: 1.7em;
    font-weight: bold;
    letter-spacing: 0.1em;
    color: white;
    margin-bottom: 2%;
    border-bottom: 3px solid white;

`

export const VideoText = styled.div`
    display: flex;
    aling-items: center;
    height:20%;
    width: 80%;
    font-size: 1em;
    letter-spacing: 0.1em;
    color: white;

`



export const RightTextForVideo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: 60%;
    margin-left: 10%;
`

export const RightVideoHeading = styled.div`
    display: flex;
    aling-items: center;
    justify-content: center;
    height:20%;
    width: 80%;
    font-size: 1.7em;
    font-weight: bold;
    letter-spacing: 0.1em;
    color: white;
    margin-bottom: 2%;
    border-bottom: 3px solid white;

`

export const RightVideoText = styled.div`
    display: flex;
    aling-items: center;
    height:20%;
    width: 80%;
    font-size: 1em;
    letter-spacing: 0.1em;
    color: white;

`
export const RightVideoArea = styled.div`
    display: flex;
    height: 100%;
    width: 30%;
    margin-right: 5%;


`

export const ButtonArea = styled.div`
    display: flex;
    max-height: 400px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    width: 100%;
    height: 50vh;
    background: #154E50;
    

`

export const ButtonHeading = styled.div`
    display: flex;
    aling-items: center;
    justify-content: center;
    height:20%;
    width: 40%;
    font-size: 1.7em;
    font-weight: bold;
    letter-spacing: 0.1em;
    color: white;
    margin-left: 15%;
    border-bottom: 3px solid white;

`

export const ButtonText = styled.div`
    display: flex;
    aling-items: center;
    height:20%;
    width: 80%;
    font-size: 1em;
    letter-spacing: 0.1em;
    color: white;
    margin-left: 15%;

`

export const Button = styled.button`
    dipslay: flex;
    font-size: 1.2em;
    height: 20%;
    width: 15%;
    border: 2px white solid;
    background-color: #154E50;
    color: white;
    font-weight: bold;
    margin: 5px;
    padding: 10px;
    margin-left: 70%;
    cursor: pointer;

    :hover {
        box-shadow: inset 0 100px 0 0 #C9D5B5;
        -webkit-transition: ease-out 0.8s;
        -moz-transition: ease-out 0.8s;
         transition: ease-out 0.8s;
      }

`

export const ContactBox = styled.div`
      display: flex;
      align-items: center;
      width: 100%;
      height: 70vh;
      max-height: 500px;
      background: #153B50;


`
export const ContactFromContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90%;
  width: 40%;
  margin-left: 15%;
  @media(max-width: 500px){
    display: flex;
    flex-direction: row;
    height: 80vh;
    // border: 3px solid red;
  }
`;


export const FormWrapper = styled.form`
display: flex;
height: 90%;
width: 80%;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
@media(max-width: 500px){
  display: flex;
  height: 90vh;
  width: 90vw;

}
`;


export const Input = styled.input`
    display: flex;
    height: 10%;
    width: 80%;
    border-bottom: 1px solid lightGray;
`;

export const StyledTextArea = styled.textarea`
    display: flex;
    height: 20%;
    width:  80%;

`

export const SendButton = styled.button`
dipslay: flex;
font-size: 1.2em;
height: 15%;
width: 25%;
border: 2px white solid;
background-color: #154E50;
color: white;
font-weight: bold;
margin: 5px;
padding: 10px;
cursor: pointer;

:hover {
    box-shadow: inset 0 100px 0 0 #C9D5B5;
    -webkit-transition: ease-out 0.8s;
    -moz-transition: ease-out 0.8s;
     transition: ease-out 0.8s;
  }

`


export const InfoContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    height: 90%;
    width: 40%;
    @media(max-width: 500px){
      display: flex;
      flex-direction: row;
      height: 80vh;
      // border: 3px solid red;
  }
`;


export const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 30%;
    width: 80%;
    border-bottom: 1px solid lightgray;


`

export const IconWithText = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.2em;
    font-weight: bold;
    color: white;
    height: 40%;
    width: 80%;


`

