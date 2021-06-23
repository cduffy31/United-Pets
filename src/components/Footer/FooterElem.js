import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom'

/* Encapsulates items within footer */
export const Wrapper = styled.div`
    justify-content: center;
    marign: 0 auto;
    max-width: 1500px;
    display: flex;
    flex-direction: column;
`

/* Encapsulates Wrapper */
export const Container = styled.div`
    padding: 45px 250px;
    background-color: #EEEEEE;
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

export const Title = styled.div`
    font-size: 12px;
    font-weight: bold;
    color: #666666;
    margin-bottom: 28px;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 50px;
    text-align: left;
`
export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(230px,1fr));
    grid-gap: 10px;
    
    
    @media (max-width: 1500px){
        grid-template-columns: repeat(auto-fill,minmax(200px,1fr)); 
    }
`
export const FootBtnLink = styled(Link)`
    background-colour: Transparent;
    color: #666666;
    margin-bottom: 28px;
    text-declaration: none;
    cursor: pointer;

    &:hover {
        color: #5A9DDA;
        transition: 200ms ease-in;
    }
`



