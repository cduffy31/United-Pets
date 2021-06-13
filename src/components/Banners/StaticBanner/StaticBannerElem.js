import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const Container = styled.div`
    padding: 0px 140px;
    background-color: none;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    marign: 0 auto;
    max-width: 1600px;
    position: relative;    
`;


export const BannerImg = styled.img`
    height: 700px;
    width: 1600px;
`;

export const BannerTitle = styled.div`
    background-color: white;
    display: flex;
    height: 100px;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    padding: 0px 10px;
    width: max-content;   
    font-weight: bold;
    font-size: 50px;
    position: absolute;
    bottom: 170px;
    left: 50%;
    transform: translate(-50%, -50%);
`;


export const BannerLink = styled(Link)`
    text-decoration: none;
    color: black;
    border: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: black;
    }
`

export const BannerBtn = styled(NavLink)`
    background-color: white;
    text-decoration: none;
    color: black;
    border: none;
    height: 50px;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    padding: 0px 20px;
    position: absolute;
    bottom: 70px;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: bold;
    transition: 1s;

    &:hover {
       color: white;
       background-color: black;
       text-decoration: none;
    }
`;
