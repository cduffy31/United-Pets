import React from 'react';
import{RiAccountCircleLine} from "react-icons/ri";
import{RiShoppingBasketLine} from "react-icons/ri";
import { MainNavBar, NavItemLink,  NavMenu, NavBtnLink, NavSearch, DropDown, NavItem, DropRow, DropColumn, DropTitle, DropLink } from './NavigationBarElem';
import SearchBar from '../SearchBar/SearchBarComp'

/* Todo Drop Down elements: Need Server Up and running
    Need Navigation Item component
    
    Basket
    <NagivgationBtnItem 
                    dropLinksList = {null}
                    img={<RiShoppingBasketLine size={28} />}
                    link='/basket'
                    label = 'Basket' 
                />     

*/




const NavigationBar = () => {

    const Animals = ['Dogs', 'Cats', 'Small Pets', 'Birds', 'Horses', 'Reptiles']

    const Categories = ['Food','Toys','Beds', 'Acessories'];
    
    const Account = ['My Account','My Orders', 'My Returns', 'Retruns Infomation', 'Contact Preferences'];


    const NagivgationItem = ({label, link, dropLinksList}) => {

        return(
            <NavItem>
                <NavItemLink to={link}>
                    {label}
                    <DropDown>
                        <DropRow>
                            <DropColumn>
                                <DropTitle>{label}</DropTitle>
                                {dropLinksList.map(link => (<DropLink to={'/'+label+link}>{link}</DropLink>))}
                            </DropColumn>
                        </DropRow>
                    </DropDown>
                </NavItemLink>
            </NavItem>
        );
    };

    const NagivgationAccountBtnItem = ({dropLinksList, img, link, label}) => {
        return(
            <NavItem>
                <NavBtnLink to = {link}>
                    {img}
                    <DropDown>
                        <DropRow>
                            <DropColumn>
                                <DropTitle>{label}</DropTitle>
                                {dropLinksList.map(link => (<DropLink to={'/'+label+link}>{link}</DropLink>))}
                            </DropColumn>
                        </DropRow>
                    </DropDown>
                </NavBtnLink>
            </NavItem>
        );
    };

    

    return (
        <>
            <MainNavBar>
                <NavItemLink to="/home">
                    <h1>LOGO</h1>
                </NavItemLink>
                <NavSearch>
                    <SearchBar/> 
                </NavSearch>
                <NagivgationAccountBtnItem 
                    dropLinksList={Account} 
                    img={<RiAccountCircleLine size={28} />}
                    link='/account' 
                    label='Account'
                />
                                               
            </MainNavBar>
            <NavMenu>
                {Animals.map(animal =>(<NagivgationItem  dropLinksList={Categories} label={animal} link={'/'+animal} />))}
            </NavMenu>
        </>
    );
};

export default NavigationBar;