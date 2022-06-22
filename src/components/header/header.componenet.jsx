import React from "react";
import './header.styles.scss';
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import {ReactComponent as ReactLogo} from '../../assets/crown.svg';
import { connect } from "react-redux";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.slectors";
import CartIcon from '../cart-icon/cart-icon.componenet';
import {createStructuredSelector} from 'reselect'
import CartDropdown from "../cart-dropdown/cart-dropdown.componenet";
import {
    HeaderContainer , LogoContainer , OptionsContainer 
    , OptionLink ,OptionDiv
}from './header.styles';

const Header =({currentUser,hidden}) => (
<HeaderContainer>
<LogoContainer to={'/'}>
    <ReactLogo className='logo' />
</LogoContainer>
<OptionsContainer>
    <OptionLink  to ={'/shop'} >SHOP</OptionLink>
    <OptionLink  to ={'/shop'} >CONTACT</OptionLink>
    {
        currentUser ?
        <OptionDiv onClick={()=> auth.signOut()}> SIGN OUT</OptionDiv>
        :
        <OptionLink to={'/signin'}>SIGN IN</OptionLink>
    }
    <CartIcon/>
</OptionsContainer>
    {hidden ? null :   <CartDropdown/>
    }
</HeaderContainer>
);
const MapStateToProps = createStructuredSelector ({
currentUser: selectCurrentUser,
hidden : selectCartHidden 
});
export default connect(MapStateToProps)(Header);