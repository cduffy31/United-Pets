import React from 'react'
import { CarouselContainer } from './CarouselsElem'
import Product from '../../products/Product/Product';
import ProductCarouselCard from './ProductCarouselCard';

/* Carousel component that accepts any size card */



const Carousel = ({RecomendedProducts,onAddToCart}) => {

    return(
        <CarouselContainer>
            {RecomendedProducts.map((product)=>(
                <ProductCarouselCard product={product}/>
            ))}
        </CarouselContainer>
    );
};

export default Carousel;