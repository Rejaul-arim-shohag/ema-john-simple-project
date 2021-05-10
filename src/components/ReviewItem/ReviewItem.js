import React from 'react';

const ReviewItem = (props) => {
    const {name, quantity,price, key} = props.product;
    const reviewItem = {
        borderBottom : "1px solid gray",
        marginBottom : "5px",
        marginLeft : "100px",
        paddingBottom : "15px"
    }

    return (
        <div style={reviewItem}>
          <h3 className="product-name">{name}</h3>
          <h4>Quantity : {quantity}</h4>
          <p><small>$ {price}</small></p>
          <br />
          <button 
          onClick={()=>props.removeProduct(key)}
           className="main-btn"
           >Remove</button>
        </div>
        

    );
};

export default ReviewItem;