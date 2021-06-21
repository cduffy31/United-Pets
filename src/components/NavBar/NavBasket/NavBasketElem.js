/* NavBasket Styled Components */

import { unstable_renderSubtreeIntoContainer } from "react-dom";
import styled from "styled-components";

export const Container = styled.div`
    width: 310px;
    height: 100%;
    background-color: #EEEEEE;
    margin-bottom: 5px;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    height: 70;
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

export const SubTotalContainer = styled.div`

`;

export const VeiwBagBtn = styled.button`

`;

export const CheckoutBagBtn = styled.button`
   
`;