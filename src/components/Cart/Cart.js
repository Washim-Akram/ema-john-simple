import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    for(const product of cart){
        total = total + product.price;
    }
    const shipping = 15;
    const tax = (total + shipping) * 10;
    const grandTotal = total + shipping + tax;
    return (
        <div>
            <h3>Order summary</h3>
            <h5>Items Ordered: {props.cart.length}</h5>
            <p>total: {total}</p>
            <p>{shipping}</p>
            <p>{tax}</p>
            <p>{grandTotal}</p>
        </div>
    );
};

export default Cart;