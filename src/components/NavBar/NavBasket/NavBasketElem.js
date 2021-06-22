/* NavBasket Styled Components */

import { unstable_renderSubtreeIntoContainer } from "react-dom";
import styled from "styled-components";
import {NavLink as Link} from 'react-router-dom'

export const Container = styled.div`
    width: 320px;
    height: 100%;
    background-color: #EEEEEE;
    padding-bottom: 5px;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    height: 30px;
    width: auto;
    background-color: transparent;
    justify-content: flex-start;
    padding: 10px;
    position: relative;
`;

export const BagTitle = styled.a`
    font-weight: bold;
    margin-right: 5px;
`;

export const BagText = styled.a`
    color: #666666;
`;

export const ExitBtn = styled.button`
    background-color: transparent;
    padding: 1px;
    color: #666666;
    cursor: pointer;
    border: none;
    width: 20px;
    height: 20px;
    position: absolute;
    top: 10px;
    right: 10px;

    &:hover {
        opacity: 0.6;
        transition: 200ms ease-in;
    }
`;

export const SubContainer = styled.div`
    display: flex;
    width 280px;
    justify-content: space-evenly;
    background-color: white;
    color: #666666;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 10px;
`;

export const ItemsContainer = styled.div`
    width: 100%;
    max-height: 500px;
    overflow-y: auto;
`;

export const VeiwBagBtn = styled(Link)`
    height: 30px;    
    width: 120px;
    font-weight: bold;
    border: none;
    color: #EEEEEE;
    background-color: #666666;
    text-decoration: none;
    font-size: 16;
    text-align: center;
    
    :hover {
        cursor: pointer;
        color: #666666;
        background-color: #EEEEEE;
        transition: 200ms ease-in;
    }
`;

export const CheckoutBagBtn = styled(Link)`
    height: 30px;
    width: 120px;
    font-weight: bold;
    border: none;
    color: #666666;
    background-color: #EEEEEE;
    text-decoration: none;
    font-size: 16;
    text-align: center;
    
    :hover {
        cursor: pointer;
        color: #EEEEEE;
        background-color: #666666;
        transition: 200ms ease-in;
    }
`;