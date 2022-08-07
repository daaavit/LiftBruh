import styled from "styled-components"
import {Link} from "react-router-dom";

export const SideBarWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    width: 10vw;
    max-width: 150px;
    background: #C9D5B5;


`

export const LogoBox = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20%;
    max-height: 170px;
    width: 80%;
    cursor: pointer;
    

`


export const MenuBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 93%;
    width: 100%;


`

export const UniMenuBox = styled.div`
    display: flex;
    flex-direction: column;
    height: 20%;
    width: 100%;
    


`


export const TextBoxWithIcon = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1em;
    font-weight: bold;
    justify-content: center;
    align-items: center;
    height: 100%;
    max-height: 100px;
    width: 100%;
    cursor: pointer;

    :hover {
        border-bottom: 5px solid #4762F0;
        font-size: 1.2em;

        animation: TextBoxWithIcon 2s ease 0s infinite normal forwards;
        @keyframes TextBoxWithIcon {
            0%,
            100% {
                transform: translateX(0%);
                transform-origin: 50% 50%;
            }
        
            15% {
                transform: translateX(-30px) rotate(-6deg);
            }
        
            30% {
                transform: translateX(15px) rotate(6deg);
            }
        
            45% {
                transform: translateX(-15px) rotate(-3.6deg);
            }
        
            60% {
                transform: translateX(9px) rotate(2.4deg);
            }
        
            75% {
                transform: translateX(-6px) rotate(-1.2deg);
            }

        
    }
    

   
    }

`