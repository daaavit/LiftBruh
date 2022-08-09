import styled from 'styled-components'
import {Link} from "react-router-dom";


export const HamMenuWrapper = styled.div`
    display: flex;
    height: 15vh;
    width: 90vw;
    border-radius: 20px;
    position: fixed;
    top: 80%;
    left: 5%;
    z-index: 1;
    background: rgba(116, 55, 55, 0.02);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(7.9px);
    -webkit-backdrop-filter: blur(7.9px);
    border: 1px solid rgba(116, 55, 55, 0.76);
`

export const LogoBox = styled(Link)`
    display: flex;
    align-items: center;
    justify-contnet: center;
    height: 100%;
    max-height: 170px;
    width: 30%;
    cursor: pointer;
    margin-left: 2%;

`

export const NavBarBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    height: 100%;
    width: 68%;
    margin-left: 2%;

`

export const LinksTo = styled(Link)`
    display: flex;
    text-decoration: none;
    color: white;
    font-size: 1em;
    font-weight: bold;
    align-items: center;
    justify-content: center;
    height: 20%;
    width: 100%;

`
