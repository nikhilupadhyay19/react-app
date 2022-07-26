import React from 'react';

const Product = (props) => {
  const { data: product } = props;
  // console.log(data);
  return (
    <div className="product-list">
      <p>
        <strong>Product Component</strong> :{product.name.common}
      </p>
    </div>
  );
};
export { Product };
