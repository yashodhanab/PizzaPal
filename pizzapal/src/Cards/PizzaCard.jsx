import React from 'react';
import './PizzaCard.css';

export default function PizzaCard() {
  return (
    <div className="pizza-card">
      <img src={pizzaImage} alt={`${pizzaName} Image`} className="pizza-image" />
      <h3 className="pizza-name">{pizzaName}</h3>
      <p className="pizza-description">{pizzaDescription}</p>
      <div className="pizza-footer">
        <span className="pizza-price">Rs. {price}</span>
        <button className="add-to-cart-button">Add to Cart</button>
      </div>
    </div>
  );
}

