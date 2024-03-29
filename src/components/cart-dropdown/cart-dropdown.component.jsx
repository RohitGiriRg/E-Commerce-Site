import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';
import { withRouter } from "react-router-dom";

import CartItem from "../cart-item/cart-item.component";
import CustomButton from '../custom-button/custom-buttom.components';
import './cart-dropdown.styles.scss';
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.action";



const upperCase = 'Go To Checkout';

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className="cart-dropdown">
    <button className="close-btn" onClick={() => {
            dispatch(toggleCartHidden());
        }}>X</button>
        <div className="cart-items">
            {
                cartItems.length ? (
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />))
                ) :

                    (<span className="empty-message">Your Cart is Empty</span>)
            }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
        }}>{
                upperCase.toUpperCase()
            }
        </CustomButton>

    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));