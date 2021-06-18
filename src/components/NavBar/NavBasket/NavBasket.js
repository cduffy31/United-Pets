import React from 'react';
import {ImBin} from 'react-icons/im';

const BasketCard = (props) => {
    const image = props.image;
    const price = props.price;
    const title = props.title;
    const animal = props.animal;
    const category = props.category;
    const quantity = props.quantity;

    return(
        <BasketItem>
            <ItemRow>
                <ItemImage src = {image}/>
                <ItemColumn>
                    <ItemPrice>{price}</ItemPrice>
                    <ItemTitle>{title}</ItemTitle>
                    <ItemSubrow>
                        <ItemAnimal>{animal}</ItemAnimal>
                        <ItemCategory>{category}</ItemCategory>
                        <ItemQuantity>{quantity}</ItemQuantity>
                    </ItemSubrow>
                    <RemoveItem><ImBin size={14}/></RemoveItem>
                </ItemColumn>
            </ItemRow>
        </BasketItem>
    );
}

const NavBasket = () => {
    /* 
    const customerItems = Callans code

    todo functions:
    remove item
    
    */
 
    return(
            <Container>
                <BasketTopRow>
                    <BasketTitle></BasketTitle>
                    <NumItems/>
                </BasketTopRow>
                <Wrapper>
                    <BasketCard/> 
                </Wrapper>
                <BasketSubTotal></BasketSubTotal>
                <BasketBottomRow>
                    <VeiwBasketBtn></VeiwBasketBtn>
                    <CheckoutBasketBtn></CheckoutBasketBtn>
                </BasketBottomRow>
            </Container>   
    );
}

export default NavBasket;