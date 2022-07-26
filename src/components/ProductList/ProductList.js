import React from 'react';
import { Product } from '../Product/Product';

const ProductList = (props) => {
  const { ctp, data: products } = props;
  // console.log(ctp, products);
  return (
    <div className="product-list">
      <p>Product List Component</p>
      {products.map((product) => (
        <Product data={product} />
      ))}
      <button onClick={() => ctp('Nikhil', 'Upadhyay')}>Click Here</button>
    </div>
  );
};
export { ProductList };
