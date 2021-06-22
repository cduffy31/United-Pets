import styled from "styled-components";
import {NavLink as Link} from 'react-router-dom'

export const BasketItemContainer = styled.div`
    background-color: white;
    height: 150px;
    width: 300px;
    margin: 0 auto;
    margin-bottom: 10px;
`;

export const BasketItem = styled(Link)`
    height: 100%;
    width: 100%;
    color: #666666;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        color: #5A9DDA;
        transition: 200ms ease-in;
    }
`;

export const ItemRow = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(95px,1fr));
    grid-gap: 2px;
    padding: 10px;
`;

export const ItemImage = styled.img`
    height: 130px;
    width: 100;
    background-color: white;
`;

export const ItemColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 140px;
    height: 100%;
    text-align: left;
    position: relative;
    word-break: break-word;
`;

export const ItemPrice = styled.a`
    font-weight: bold;
    margin-bottom: 12px;
`;

export const ItemTitleContainer = styled.div`    
    overflow: hidden;
    display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    width: 100%;
    margin-bottom: 12px;
`;

export const ItemText = styled.a`
    font-size: 12px;
`;

export const ItemSubrow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 120;
`;


export const RemoveItem = styled.button`
    background-color: transparent;
    padding: 1px;
    color: #666666;
    cursor: pointer;
    border: none;
    width: 20px;
    height: 20px;
    position: absolute;
    bottom: 0px;
    right: 0px;
    

    &:hover {
        color: #D91345;
        transition: 200ms ease-in;
    }
`;

