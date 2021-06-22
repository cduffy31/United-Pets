import React from 'react';
import Whiskas from './TempImageProduct/Whiskas.png';
import { Container, Header, BagTitle, BagText, ExitBtn, SubContainer, VeiwBagBtn, CheckoutBagBtn , ItemsContainer} from './NavBasketElem';
import BasketCard from './BasketCard';
import {ImCross} from 'react-icons/im';


const NavBasket = () => {
    /* 
    const customerItems = Callans code

    todo functions:
    get items
    remove items              

    */

    
    const NumItems = 3;
    const subTotal = 100;

    return(
            <Container>
                <Header>
                    <BagTitle>My Bag,</BagTitle>
                    <BagText>{NumItems+' items'}</BagText>
                    <ExitBtn><ImCross size={24}/></ExitBtn>
                </Header>
                <ItemsContainer>
                    <BasketCard 
                        image={Whiskas} 
                        price={100} 
                        title={'WHISKAS: 1+ years variety cat food kdee'} 
                        animal={'Cats'} 
                        category={'Food'} 
                        quantity={1}
                    />
                    <BasketCard 
                        image={Whiskas} 
                        price={100} 
                        title={'WHISKAS: 1+ years variety cat food kdee'} 
                        animal={'Cats'} 
                        category={'Food'} 
                        quantity={1}
                    />
                    <BasketCard 
                        image={Whiskas} 
                        price={100} 
                        title={'WHISKAS: 1+ years variety cat food kdee'} 
                        animal={'Cats'} 
                        category={'Food'} 
                        quantity={1}
                    />
                </ItemsContainer>
                <SubContainer>
                    <BagText>Sub-total:</BagText>
                    <BagText>{'£'+subTotal}</BagText>
                </SubContainer>
                <SubContainer>
                    <CheckoutBagBtn to='/Checkout'>Checkout</CheckoutBagBtn>
                    <VeiwBagBtn to='/Bag'>View Bag</VeiwBagBtn>

                </SubContainer>
            </Container>   
    );
}

export default NavBasket;