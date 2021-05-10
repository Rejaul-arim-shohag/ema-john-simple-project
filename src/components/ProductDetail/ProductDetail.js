import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetail = () => {
    const {productkey} = useParams()
    console.log(useParams())
    // console.log(productKey)
   const product = fakeData.find(pd=>pd.key===productkey)
   console.log(product)
    return (
        <div>
            <h1>{productkey} coming soooon </h1>
            <Product showAddToCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetail;