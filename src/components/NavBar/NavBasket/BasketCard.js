import React from 'react'
import {ImBin} from 'react-icons/im';
import { BasketItem, ItemRow, ItemImage,ItemColumn, ItemPrice, ItemTitle,ItemSubrow, ItemAnimal, ItemCategory, ItemQuantity, RemoveItem } from './BasketCardElem';


const BasketCard = (props) => {

    return(
        <BasketItem>
            <ItemRow>
                <ItemImage src = {props.image}/>
                <ItemColumn>
                    <ItemPrice>{props.price}</ItemPrice>
                    <ItemTitle>{props.title}</ItemTitle>
                    <ItemSubrow>
                        <ItemAnimal>{props.animal}</ItemAnimal>
                        <ItemCategory>{props.category}</ItemCategory>
                        <ItemQuantity>{props.quantity}</ItemQuantity>
                    </ItemSubrow>
                    <RemoveItem><ImBin size={14}/></RemoveItem>
                </ItemColumn>
            </ItemRow>
        </BasketItem>
    );
}

export default BasketCard;