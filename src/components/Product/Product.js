import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = (props) => {
    // console.log(props);
    const {name, seller,price, stock, img} = props.product;
    const shoppingCartIcon = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className = "product">
            <div>
                <img src={img} alt="product" />
            </div>

            <div>
                <h3 className = "product-name">{name}</h3>
                <p>By: {seller}</p>
                <h4>${price}</h4>
                <p>Only {stock} left in stock - order soon</p>
                <button onClick = {() => props.handleAddToCart(props.product)} className = "add-to-cart-btn">{shoppingCartIcon} Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;