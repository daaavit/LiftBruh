import styled from "styled-components";
import Pic from '../assets/weights.png'



export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    align-items: center;

`
export const Img = styled.img`
    display: flex;
    position: fixed;
    height: 100%;
    width: 100%;
    z-index: -1;

    @media(max-width: 750px) {
        height: 100vh;
        width: 100vw;
    }

`


export const SignInBox = styled.div`
    display: flex;
    flex-direction: column;
    height: 70%;
    width: 30%;
    align-items: center;
    max-width: 550px;
    max-height: 650px;

    margin-top: 3%;

    @media(max-width: 750px) {
        display: flex;
       margin-top: 0%;
    }
    

    background: rgba(116, 55, 55, 0.02);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(7.9px);
    -webkit-backdrop-filter: blur(7.9px);
    border: 1px solid rgba(116, 55, 55, 0.76);

    @media(max-width: 750px) {
        display: flex;
        width: 90%;
        height: 60%;
    }

`

export const Heading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2em;
    font-weight: bold;
    height: 10%;
    width: 80%;
    margin-top: 2%;
    border-bottom: 1px solid lightgray;
    color: white;

`

export const InputArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 30%;
    width: 80%;
    margin-top: 3%;

    


`

export const InputBox = styled.div`
    display: flex;
    height: 20%;
    width: 90%;
    border: 0.5px #d1d9e6 solid;
    border-radius: 10px;


`

export const IconBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100%;
width: 10%;



`

export const UniInputBox = styled.input`
    display: flex;
    height: 95%;
    width: 90%;
    border-radius: 0px 10px 10px 0px;
    border: none;
    box-shadow: inset -2px -2px 4px #FFFFFF,   inset 2px 2px 7px  #9C9C9C !important;
    background: none;

    :placeholder {
        color: white;
    }
    
    -webkit-appearance: none;
   

`

export const PassOptions = styled.div`
    display: flex;
    height: 10%;
    width: 80%;
    align-items: center;


`


export const RemeberMe = styled.div`
    display: flex;
    font-size: 1.2em;
    height: 100%;
    width: 50%;
    align-items: center;
    color: white;
    cursor: pointer;

    @media(max-width: 750px) {
        display: flex;
        font-size: 1em;
    }

}


`


export const ForgotPass = styled.div`
    display: flex;
    font-size: 1.2em;
    height: 100%;
    width: 50%;
    align-items: center;
    justify-content: flex-end;
    color: white;
    cursor: pointer;

    @media(max-width: 750px) {
        display: flex;
        font-size: 1em;
    }

 
}
`

export const SignInButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2em;
    font-weight: bold;
    height: 10%;
    width: 80%;
    margin-top: 3%;
    color: white;
    cursor: pointer;
    box-shadow: inset -2px -2px 4px #000000,   inset 2px 2px 7px  #C5C5C5 !important;
    border: 0.5px #A098C8 solid;
    border-radius: 20px;

    :hover {
        font-size: 1.5em
    }

`

export const CreateAccountBox = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 23%;
    width: 80%;
    margin-top: 3%;

`

export const TextForCreateAcount = styled.div`
    display: flex;
    height; 10%;
    width: 90%;
    justify-content: center;
    align-items: center;
    font-size: 1em;
    color: white;
`

export const IconBoxesForAccounts = styled.div`
    display: flex;
    justify-content: space-evenly;
    height: 50%;
    width: 90%;
    justify-content: space-evenly;
    align-items: center;
    

`

export const IconsForAccounts = styled.div`
    display: flex;
    height: 70%;
    width: 17%;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    box-shadow: 3px 3px 6px #000000, -3px -3px 6px #C5C5C5;
    border: 0.5px #A098C8 solid;
    border-radius: 5px;

    :hover {
        border: none;
        box-shadow: inset -2px -2px 4px #000000,   inset 2px 2px 7px  #C5C5C5 !important;
    }

`