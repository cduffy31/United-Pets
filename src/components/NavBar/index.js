import React from 'react';
import "../../App.css";
import{RiAccountCircleLine} from "react-icons/ri"
import{RiShoppingBasketLine} from "react-icons/ri"

const NavBar = () => {
    return (
        //<div><h1>NavBar</h1></div>
        <div className="NavBar">
            <div className="MainNav">
                <div className="Logo">
                    <h1>LOGO</h1>
                </div>
                <div className="SearchBar">
                    <input type="text" placeholder="Seach..." className="Form"/>
                </div>
                <div className="Icon">
                    <button className="IconBtn">
                        <h1>
                            <RiAccountCircleLine/>
                        </h1>
                    </button>
                </div>
                <div className="Icon">
                    <button className="IconBtn">
                        <h1>
                            <RiShoppingBasketLine/>
                        </h1>
                    </button>
                </div>
            </div>
            <div className="SubNav">
            <div className="NavCategory">
                    <button className="TextBtn">
                        <h1>
                            Dog
                        </h1>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default NavBar;

