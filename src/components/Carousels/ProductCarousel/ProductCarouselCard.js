import React from 'react'
import { PCCContainer, PCCImage, PCCTitleContainer, PCCTitle, PCCPriceContainer, PCCTotalPrice, PCCIfDiscounted, PCCLink } from '../ProductCarouselCardElem'


const ProductCarouselCard = ({product}) =>{

    return(
        <PCCContainer>
            <PCCLink to={'/'}>
                <PCCImage src={product.media.source}/>
                <PCCTitleContainer>
                    <PCCTitle>{product.name}</PCCTitle>
                </PCCTitleContainer>
                <PCCPriceContainer>
                    <PCCIfDiscounted>{product.price.formatted_with_symbol}</PCCIfDiscounted>
                    <PCCTotalPrice>{product.price.formatted_with_symbol}</PCCTotalPrice>
                </PCCPriceContainer>
            </PCCLink>
        </PCCContainer>
    );
}

export default ProductCarouselCard;