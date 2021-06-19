import React from 'react';
import Whiskas from './TempImageProduct/Whiskas.png';
import { Container } from './NavBasketElem';
import BasketCard from './BasketCard';


const NavBasket = () => {
    /* 
    const customerItems = Callans code

    todo functions:
    get items
    remove items
    
                <BasketTopRow>
                    <BasketTitle></BasketTitle>
                    <NumItems/>
                </BasketTopRow>
                <BasketCardWrapper>
                    <BasketCard/> 
                </BasketCardWrapper>
                <BasketSubTotal></BasketSubTotal>
                <BasketBottomRow>
                    <VeiwBasketBtn></VeiwBasketBtn>
                    <CheckoutBasketBtn></CheckoutBasketBtn>
                </BasketBottomRow>

                

    */

    
 
    return(
            <Container>
                <BasketCard 
                    image={Whiskas} 
                    price={100} 
                    title={'WHISKAS'} 
                    animal={'Cats'} 
                    category={'Food'} 
                    quantity={1}
                />
            </Container>   
    );
}

export default NavBasket;