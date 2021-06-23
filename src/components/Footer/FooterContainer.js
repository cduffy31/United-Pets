import React from 'react';
import Footer from './Footer';
import {FaSnapchat,FaFacebook,FaInstagram,FaTwitterSquare} from 'react-icons/fa'
import FooterBar from './FooterBar';


export function ContainerFoot(){
    return(
        <>
            <FooterBar/>
            <Footer>
                <Footer.Wrapper>
                    <Footer.Row>
                        <Footer.Column>
                            <Footer.Title>Help & info</Footer.Title>
                            <Footer.Link to='/Help'>Help</Footer.Link>
                            <Footer.Link to='/TrackOrder'>Track Order</Footer.Link>
                            <Footer.Link to='/DeliveryReturns'>Delivery And Returns</Footer.Link>
                            <Footer.Link to='/Discounts'>Discounts</Footer.Link>
                        </Footer.Column>
                        <Footer.Column>
                            <Footer.Title>About</Footer.Title>
                            <Footer.Link to='/AboutUs'>About Us</Footer.Link>
                            <Footer.Link to='/Careers'>Careers</Footer.Link>
                            <Footer.Link to='/CorporateResponsibility'>Corporate Responsibility</Footer.Link>
                            <Footer.Link to='/CyberSecurity'>Cyber Security</Footer.Link>
                        </Footer.Column>
                        <Footer.Column>
                            <Footer.Title>Social Media</Footer.Title>
                            <Footer.BtnLink to='/Link'><FaFacebook size={20} /></Footer.BtnLink>
                            <Footer.BtnLink to='/Link'><FaInstagram size={20} /></Footer.BtnLink>
                            <Footer.BtnLink to='/Link'><FaTwitterSquare size={20} /></Footer.BtnLink>
                            <Footer.BtnLink to='/Link'><FaSnapchat size={20} /></Footer.BtnLink>
                        </Footer.Column>
                        <Footer.Column>
                            <Footer.Title>Heading Here</Footer.Title>
                            <Footer.Link to='/Link'>Link</Footer.Link>
                            <Footer.Link to='/Link'>Link</Footer.Link>
                            <Footer.Link to='/Link'>Link</Footer.Link>
                            <Footer.Link to='/Link'>Link</Footer.Link>
                        </Footer.Column>
                    </Footer.Row>
                </Footer.Wrapper>
            </Footer>
            <FooterBar>
                <FooterBar.Wrapper>
                    <FooterBar.BarRow>
                        <FooterBar.Link>Privacy & Cookies</FooterBar.Link>
                        <FooterBar.BarLine/>
                        <FooterBar.Link>Ts&Cs</FooterBar.Link>
                        <FooterBar.BarLine/>
                        <FooterBar.Link>Accessibility</FooterBar.Link>
                    </FooterBar.BarRow>
                </FooterBar.Wrapper>
            </FooterBar>
        </>
    );
}