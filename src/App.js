import React from 'react';
import './style.css';
import { ProductPage } from './pages/ProductPage/ProductPage';
import { PersonLocation } from './pages/PersonLocation/PersonLocation';

export default function App() {
  return (
    <div>
      <PersonLocation />
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <ProductPage />
    </div>
  );
}
