import React from 'react';
import { Container, Wrapper, Row, Column, Title, FootLink,FootBtnLink} from './FooterElem'


export default function Footer ({children,...props}) {
    return < Container {...props}>{children}</Container>
};

Footer.Wrapper = function FooterWrapper({children,...props}){
    return <Wrapper {...props}>{children}</Wrapper>
};

Footer.Row = function FooterRow({children,...props}){
    return <Row {...props}>{children}</Row>   
};

Footer.Column = function FooterColumn({children,...props}){
    return <Column {...props}>{children}</Column>
};

Footer.Title = function FooterTitle({children,...props}){
    return <Title {...props}>{children}</Title>
};

Footer.Link = function FooterLink({children,...props}){
    return <FootLink {...props}>{children}</FootLink>
};

Footer.BtnLink = function FooterBtnLink({children,...props}){
    return <FootBtnLink {...props}>{children}</FootBtnLink>
};




