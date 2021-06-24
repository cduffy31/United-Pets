import React, { useState, useEffect } from 'react';
import  Products  from './components/products/Products';
import { commerce } from './lib/commerce';
import Carousel from './components/Carousels/ProductCarousel/Carousel.js';
import './App.css';
import { BrowserRouter } from 'react-router-dom';



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
        <Carousel RecomendedProducts={products} onAddToCart={handleAddToCart}/>
      </BrowserRouter>
    )
}

export default App;
