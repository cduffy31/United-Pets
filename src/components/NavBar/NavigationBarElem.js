import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa';

export const MainNavBar = styled.nav`
    background-color: #2D2D2D;
    height: 75px;
    display: flex;
    justify-content: center;
    padding: 2 calc((100vw - 100px)/2);
    z-index 10;
    padding-left: 25px;
    padding-right: 25px;
`;

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 lrem;
    height: 100%;
    border: none;
    cursor: pointer;
    font-family: sans-serif;

`;

export const Collapseable = styled(FaBars)`
    display: none;
    color: #fff:

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0 ;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    display: felx;
    height: 65px;
    background-color: #525050;
    allign-items: center;
    justify-content: space-between;
    padding-left: 40px;
    padding-right: 40px;
    
    @media screen and (max-width: 768){
        display: none;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin: 0 25px;
`;

export const NavBtnLink = styled(Link)`
    color: #fff;
    background-colour: Transparent;
`;

export const NavSearch = styled.nav`
    display: flex;
    flex-grow: 1;
    align-items: start;
`;



