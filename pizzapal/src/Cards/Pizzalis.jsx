import React from 'react';
import PizzaCard from './PizzaCard';
import margherita from '../assets/margherita.png'; // Example image

const pizzaData = [
  {
    name: 'Margherita',
    description: 'Classic cheese and tomato pizza.',
    image: margherita,
    price: 1200,
  },
  {
    name: 'Pepperoni Feast',
    description: 'Loaded with spicy pepperoni and extra cheese.',
    image: '../assets/pepperoni.jpg',
    price: 1500,
  },
  {
    name: 'Veggie Supreme',
    description: 'Topped with fresh veggies and rich mozzarella.',
    image: '../assets/veggie.jpg',
    price: 1400,
  },
];

export default function PizzaList () {
  return (
    <div className="pizza-list">
      {pizzaData.map((pizza, index) => (
        <PizzaCard
          key={index}
          pizzaName={pizza.name}
          pizzaDescription={pizza.description}
          pizzaImage={pizza.image}
          price={pizza.price}
        />
      ))}
    </div>
  );
}
