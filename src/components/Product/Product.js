import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const {img, name, seller,price, stock} = props.product
    return (
        <div class="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
              <h3 class="product-name">{name}</h3>
              <br></br>
              <p><small>By:{seller}</small></p>
              <p>$ {price} </p>
              <p>only {stock}  left in stock - order soon</p>
              <button class="main-btn" 
              onClick={() =>props.handleAddProduct(props.product)} FontAwesomeIcon Icon={faShoppingCart}>
               Add to cart
              </button>
              </div>
        </div>
    );
};

export default Product;