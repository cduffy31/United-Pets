import { FooterBarContainer, FootBarWrapper,FootLink, FootBarRow, FootBarLine} from './FooterBarElem'

export default function FooterBar ({children,...props}) {
    return < FooterBarContainer {...props}>{children}</FooterBarContainer>
};

FooterBar.Wrapper = function FooterWrapper({children,...props}){
    return <FootBarWrapper {...props}>{children}</FootBarWrapper>
};

FooterBar.Link = function FooterLink({children,...props}){
    return <FootLink {...props}>{children}</FootLink>
};

FooterBar.BarRow = function FooterBarRow({children,...props}){
    return <FootBarRow {...props}>{children}</FootBarRow>
};

FooterBar.BarLine = function FooterBarLine({children,...props}){
    return <FootBarLine {...props}>{children}</FootBarLine>
};



