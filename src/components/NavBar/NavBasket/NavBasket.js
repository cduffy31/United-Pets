import React from 'react';
import Whiskas from './TempImageProduct/Whiskas.png';
import { Container, Header, BagTitle, BagText, ExitBtn } from './NavBasketElem';
import BasketCard from './BasketCard';
import {ImCross} from 'react-icons/im';


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

    
    const NumItems = 3;
    return(
            <Container>
                <Header>
                    <BagTitle>My Bag,</BagTitle>
                    <BagText>{NumItems+' items'}</BagText>
                    <ExitBtn><ImCross size={24}/></ExitBtn>
                </Header>
                <BasketCard 
                    image={Whiskas} 
                    price={100} 
                    title={'WHISKAS: 1+ years variety cat food kdee'} 
                    animal={'Cats'} 
                    category={'Food'} 
                    quantity={1}
                />
            </Container>   
    );
}

export default NavBasket;