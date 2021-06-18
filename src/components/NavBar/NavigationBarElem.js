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
    padding-left: 200px;
    padding-right: 200px;
    
    @media screen and (max-width: 768){
        display: none;
    }
`;



export const NavBtnLink = styled(Link)`
    color: #fff;
    background-colour: Transparent;
    
    :hover {
        cursor: pointer;
        opacity: 0.6;
    }

`;

export const NavSearch = styled.nav`
    display: flex;
    flex-grow: 1;
    align-items: start;
`;

export const DropTitle = styled.div`
    font-size: 12px;
    font-weight: bold;
    color: #666666;
    margin-bottom: 14px;
`
export const DropLink = styled(Link)`
    font-size: 12px;
    color: #666666;
    margin-bottom: 14px;
    text-decoration: none;
    cursor: pointer;
    &:hover {
        cursor: pointer;
        opacity: 0.6;
    }
`
export const DropRow = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(230px,1fr));
    grid-gap: 10px;
`

export const DropColumn = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    text-align: left;
`

export const DropDown = styled.div`
    background-color: black;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    display: none;
    position: absolute;
    left: 0;
    top: 100%;
`;


export const NavItem = styled.div`
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    margin: 0 25px;
    
    :hover ${DropDown} {
        display: block;
    }
`;

export const NavItemLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 lrem;
    height: 100%;
    border: none;
    font-family: sans-serif;
    
    :hover{
        cursor: pointer;
        opacity: 0.6;
    }

    > img {
        margin: auto;
    }

`; 



