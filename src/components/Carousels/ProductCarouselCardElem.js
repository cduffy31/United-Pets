import styled from "styled-components";
import {NavLink as Link} from 'react-router-dom';

export const PCCContainer = styled.div`
    width: 210px;
    height: 400px
`;

export const PCCLink = styled(Link)`
    height: 100%;
    width: 100%;
    text-decoration: none;
    cursor: pointer;
    color: #666666;

    &:hover {
        color: #5A9DDA;
        transition: 200ms ease-in;
    }
`;

export const PCCImage = styled.img`
    width: 210px;
    height: 270px;
`;

export const PCCTitleContainer = styled.div`    
    overflow: hidden;
    display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    width: 100%;
    margin-bottom: 8px;
`;


export const PCCTitle = styled.a`
    font-size: 18px
`;

export const PCCPriceContainer = styled.div`
    
`;

export const PCCIfDiscounted = styled.a`
    font-size: 14px;
    text-decoration: line-through; 
    margin-bottom: 8px;

    empty{
        display: none;
    };
`;

export const PCCTotalPrice = styled.a`
    font-size: 18px;
    color: red ;
    font-weight: bold;
    margin-bottom: 8px;
`;