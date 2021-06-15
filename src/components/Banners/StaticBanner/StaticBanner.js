import React from 'react';
import { Container, Wrapper, BannerBtn, BannerImg, BannerTitle, BannerLink } from './StaticBannerElem';
import catsdogs from './../TestImages/catsdogs.png';

const StaticBanner = () => {
    return (
        <Container>
            <Wrapper>
                <BannerLink to='/BannerLink'>
                    <BannerImg src ={catsdogs}/>
                    <BannerTitle>Banner Title</BannerTitle>
                    <BannerBtn to='/BannerLink'>Banner Button</BannerBtn>
                </BannerLink>
            </Wrapper>
        </Container>
    );
};

export default StaticBanner;