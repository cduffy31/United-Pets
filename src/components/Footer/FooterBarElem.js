import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom'

/*footer bar only elements*/
export const FooterBarContainer = styled.div`
    height: 65px;
    background-color: #d9d8d6;
`;

export const FootBarWrapper = styled.div`
    justify-content: flex-end;    
    display: flex;
    padding-top: 25px;
`

export const FootBarRow = styled.div`
    min-width: 280px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`
export const FootBarLine = styled.div`
    height: 14px;
    width : 1px;
    margin-top: 2px;
    content: "";
    overflow: auto;    
    background-color: #666666;
`
export const FootLink = styled.div`
    font-size: 12px;
    color: #666666;
    margin-bottom: 28px;
    text-declaration: none;
    cursor: pointer;

    &:hover {
        color: #5A9DDA;
        transition: 200ms ease-in;
    }
`