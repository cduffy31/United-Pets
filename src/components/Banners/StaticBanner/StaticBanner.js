import React from 'react';
import { Container, Wrapper, BannerBtn, BannerImg } from './StaticBannerElem';
import BlingBling from './../TestImages/BlingBling.jpg';

const StaticBanner = () => {
    return (
        <Container>
            <Wrapper>
                <BannerImg to='/Banner'>Image Here</BannerImg>
            </Wrapper>
            
        </Container>
    );

};

export default StaticBanner