import React, { useState, useEffect } from 'react';
import  Products  from './components/products/Products';
import { commerce } from './lib/commerce';
import Carousel from './components/Carousels/Carousel.js';
import './App.css';

import { BrowserRouter } from 'react-router-dom';
import Carousel from './components/Carousels/Carousel.js';
import StaticBanner from './components/Banners/StaticBanner/StaticBanner';
import { ContainerFoot } from './components/Footer/FooterContainer';
import NavigationBar from './components/NavBar/NavigationBar';

const App = () => {
    
    const [products, setProducts] = useState([]);
    
    const [cart, setCart] = useState({});

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        setProducts(data);
    }

    const fetchCart = async () =>{

        setCart(await commerce.cart.retrieve());
    }

    const handleAddToCart = async (productId, quantity) =>{
        const item = await commerce.cart.add(productId, quantity);
        setCart(item.cart)
    }

    useEffect(()=> {
        fetchProducts();
        fetchCart();
    }, []);
    console.log(cart);
    return(
        <BrowserRouter>
        <Carousel/>
        <div>
            <Products products={products} onAddToCart={handleAddToCart}/>
        </div>
      </BrowserRouter>
    )
}

export default App;
