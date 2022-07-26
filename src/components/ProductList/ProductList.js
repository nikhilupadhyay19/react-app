import React from 'react';
import { Product } from '../Product/Product';

const ProductList = (props) => {
  return (
    <div className="product-list">
      <p>Product List Component</p>
      <Product />
      <button onClick={() => props.ctp('Nikhil', 'Upadhyay')}>
        Click Here
      </button>
    </div>
  );
};
export { ProductList };
