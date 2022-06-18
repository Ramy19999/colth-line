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
const Header =({currentUser,hidden}) => (
<div className="header">
<Link className="logo-container" to={'/'}>
    <ReactLogo className='logo' />
</Link>
<div className="options">
    <Link className="option" to ={'/shop'} >SHOP</Link>
    <Link className="option" to ={'/shop'} >CONTACT</Link>
    {
        currentUser ?
        <div className="option" onClick={()=> auth.signOut()}> SIGN OUT</div>
        :
        <Link className="option" to={'/signin'}>SIGN IN</Link>
    }
    <CartIcon/>
</div>
    {hidden ? null :   <CartDropdown/>
    }
</div>
);
const MapStateToProps = createStructuredSelector ({
currentUser: selectCurrentUser,
hidden : selectCartHidden 
});
export default connect(MapStateToProps)(Header);