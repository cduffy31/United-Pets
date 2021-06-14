import React from 'react';
import{RiAccountCircleLine} from "react-icons/ri";
import{RiShoppingBasketLine} from "react-icons/ri";
import { MainNavBar, NavLink, Collapseable, NavBtn, NavMenu, NavBtnLink, NavSearch } from './NavigationBarElem';
import SearchBar from '../SearchBar/SearchBarComp'

/* Todo Drop Down elements: Need Server Up and running*/

const NavigationBar = () => {
    return (
        <>
            <MainNavBar>
                <NavLink to="/home">
                    <h1>LOGO</h1>
                </NavLink>
                <NavSearch>
                    <SearchBar/> 
                </NavSearch>                   
                <NavBtn>
                    <NavBtnLink to="/account">
                        <h1><RiAccountCircleLine size={28} /></h1>
                    </NavBtnLink>
                </NavBtn>
                <NavBtn>
                    <NavBtnLink to="/basket">
                        <h1><RiShoppingBasketLine size={28} /></h1>
                    </NavBtnLink>
                </NavBtn>
                <Collapseable>
                    <h1>Categories</h1>
                </Collapseable>
                
            </MainNavBar>
            <NavMenu>
                <NavLink to="/dogs">
                    Dog
                </NavLink>
                <NavLink to="/cat">
                    Cats
                </NavLink>
            </NavMenu>
        </>
    );
};

export default NavigationBar;