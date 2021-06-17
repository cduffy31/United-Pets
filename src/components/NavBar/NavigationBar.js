import React from 'react';
import{RiAccountCircleLine} from "react-icons/ri";
import{RiShoppingBasketLine} from "react-icons/ri";
import { MainNavBar, NavItemLink, Collapseable, NavBtn, NavMenu, NavBtnLink, NavSearch, DropDown, NavItem } from './NavigationBarElem';
import SearchBar from '../SearchBar/SearchBarComp'

/* Todo Drop Down elements: Need Server Up and running
    Need Navigation Item component
*/




const NavigationBar = () => {
    return (
        <>
            <MainNavBar>
                <NavItemLink to="/home">
                    <h1>LOGO</h1>
                </NavItemLink>
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

                <NavItem>
                    <NavItemLink to="/dogs">
                        Dog
                        <DropDown>
                            Hello
                        </DropDown>
                    </NavItemLink>
                </NavItem>
                
                <NavItem>
                    <NavItemLink to="/cat">
                        Cats
                        <DropDown>
                            Hello
                        </DropDown>
                    </NavItemLink>
                </NavItem> 

            </NavMenu>
        </>
    );
};

export default NavigationBar;