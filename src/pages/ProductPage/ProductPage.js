import React, { useState, useEffect } from 'react';
import './ProductPage.scss';

const APIURL = 'https://restcountries.com/v3.1';
const TIMEOUT = 10;

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setLoaded] = useState(false);

  const timeout = (s) => {
    return new Promise((_, reject) => {
      setTimeout(
        () => reject(`Request is taking too long. More than ${s} seconds...`),
        s * 1000
      );
    });
  };

  const getJson = async (url, errMsg = 'Something went wrong...') => {
    try {
      const res = await Promise.race([fetch(url), timeout(TIMEOUT)]);
      const data = await res.json();
      if (!res.ok) {
        throw new Error(`${errMsg}, ${res.status}, ${data.message}`);
      }
      return data;
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const data = await getJson(`${APIURL}/all`);
        setProducts(data);
        setLoaded(true);
      } catch (err) {
        setError(err);
      }
    })();
  }, []);

  if (error) {
    return (
      <div className="product-page" id="productPage">
        <p className="error-msg">{error}</p>
      </div>
    );
  }
  if (!isLoaded) {
    return (
      <div className="product-page" id="productPage">
        <p className="error-msg">
          Please wait while product has been loaded...
        </p>
      </div>
    );
  }
  return (
    <div className="product-page" id="productPage">
      <p>Welcome to Products page...</p>
      <p>{JSON.stringify(products)}</p>
    </div>
  );
};

export { ProductPage };
