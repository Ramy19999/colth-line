import React from "react";
import './cart-dropdown.styles.scss';
import CustomButton from "../custom-button/custom-button.componenet";
import CartItem from "../cart-item/cart-item.componenet";
import { connect } from "react-redux";
import {createStructuredSelector} from 'reselect';
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { withRouter } from "../../assets/with.router";
import { useNavigate,Navigate} from 'react-router-dom';
import{toggleCartHidden} from '../../redux/cart/cart.actions'

const CartDropdown = ({ cartItems , dispatch}) => {
    const navigate = useNavigate();
    return (
    <div className="cart-dropdown">
        <div className="cart-items">
        {cartItems.length ? (
            cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
            ))
        ) : (
            <span className="empty-massage">Your cart is empty</span>
        )}
        </div>
        <CustomButton onClick={() => {
            navigate("/checkout/");
            dispatch(toggleCartHidden()); 
            }}>
        CHECKOUT
        </CustomButton>
    </div>
    );
};


const MapStateToProps = createStructuredSelector ({
    cartItems : selectCartItems
});
export default withRouter (connect(MapStateToProps)(CartDropdown))  ;