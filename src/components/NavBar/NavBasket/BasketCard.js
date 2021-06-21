import React from 'react'
import {ImBin} from 'react-icons/im';
import { BasketItem, ItemRow, ItemImage,ItemColumn, ItemPrice, ItemText,ItemSubrow, RemoveItem, BasketItemContainer, ItemTitleContainer } from './BasketCardElem';


const BasketCard = (props) => {

    return(
        <BasketItemContainer>
            <BasketItem to={'/'+props.title}>
                <ItemRow>
                    <ItemImage src = {props.image}/>
                    <ItemColumn>
                        <ItemPrice>{'£'+props.price}</ItemPrice>
                        <ItemTitleContainer><ItemText >{props.title}</ItemText></ItemTitleContainer>
                        <ItemSubrow>
                            <ItemText>{props.animal}</ItemText>
                            <ItemText>{props.category}</ItemText>
                            <ItemText>{'Qty: '+props.quantity}</ItemText>
                        </ItemSubrow>
                        <RemoveItem><ImBin size={14}/></RemoveItem>
                    </ItemColumn>
                </ItemRow>
            </BasketItem>
        </BasketItemContainer>
        
    );
}

export default BasketCard;