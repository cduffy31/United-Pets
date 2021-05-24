import React from 'react';
import{RiAccountCircleLine} from "react-icons/ri";
import{RiShoppingBasketLine} from "react-icons/ri";
import { MainNavBar, NavLink, NavSearch, Collapseable, NavBtn, NavMenu,NavBtnLink, NavSearch } from './NavigationBarElem';

const NavigationBar = () => {
    return (
        <>
            <MainNavBar>
                <NavLink to="/">
                    <h1>LOGO</h1>
                </NavLink>
                <NavSearch>
                    
                </NavSearch>                   
                <NavBtn>
                    <NavBtnLink to="/account">
                        <h1><RiAccountCircleLine/></h1>
                    </NavBtnLink>
                </NavBtn>
                <NavBtn>
                    <NavBtnLink to="/basket">
                        <h1><RiShoppingBasketLine/></h1>
                    </NavBtnLink>
                </NavBtn>
                <Collapseable>
                    <h1>Categories</h1>
                </Collapseable>
                
            </MainNavBar>
            <NavMenu>
                <NavLink to="/dogs">
                    <h1>Dogs</h1>
                </NavLink>
                <NavLink to="/cat">
                    <h1>Cats</h1>
                </NavLink>
            </NavMenu>
        </>
    );
};

export default NavigationBar;