import React from 'react';
import { Container, Wrapper, BannerBtn, BannerImg, BannerTitle, BannerLink } from './StaticBannerElem';
import dogs from './../TestImages/dogs.png';

const StaticBanner = () => {
    return (
        <Container>
            <Wrapper>
                <BannerLink to='/BannerLink'>
                    <BannerImg src ={dogs}/>
                    <BannerTitle>Banner Title</BannerTitle>
                    <BannerBtn to='/BannerLink'>Banner Button</BannerBtn>
                </BannerLink>
            </Wrapper>
        </Container>
    );
};

export default StaticBanner;