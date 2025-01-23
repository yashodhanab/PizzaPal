import React from 'react';
import './menuPage.css';
import Card2 from '../Card2/Card2'; // Assuming you already have a Card component

const MenuPage = () => {
  // List of menu items with name, image, size, and price
  const menuItems = [
    {
      id: 1,
      name: 'Pizza Margherita',
      image: '/pizza1.jpg', // Replace with actual image path
      price: 1200,
      size: 'Medium'
    },
    {
      id: 2,
      name: 'Veggie Supreme',
      image: 'path/to/veggie-supreme.jpg',
      price: 1400,
      size: 'Large'
    },

    {
      id: 3,
      name: 'Pepperoni Pizza',
      image: 'path/to/pepperoni.jpg',
      price: 1500,
      size: 'Large'
    },

    {
      id: 4,
      name: 'Cheese Delight',
      image: 'path/to/cheese-delight.jpg',
      price: 1300,
      size: 'Medium'
    },
    {
      id: 5,
      name: 'Hawaiian Pizza',
      image: 'path/to/hawaiian.jpg',
      price: 1600,
      size: 'Large'
    },
    {
      id: 6,
      name: 'BBQ Chicken Pizza',
      image: 'path/to/bbq-chicken.jpg',
      price: 1700,
      size: 'Medium'
    },
    {
      id: 7,
      name: 'Caesar Salad',
      image: 'path/to/caesar-salad.jpg',
      price: 500,
      size: 'Regular'
    },
    {
      id: 8,
      name: 'Fruit Salad',
      image: 'path/to/fruit-salad.jpg',
      price: 450,
      size: 'Regular'
    }
  ];

  return (
    <div className="menu-page">
      {/* Left Sidebar */}
      <div className="search-bar">
        <input type="text" className="search-input" placeholder="Search categories..." />
      </div>

      <div className="menu-design">
        <div className="category-sidebar">
          <h3 className="category-title">CATEGORIES</h3>
          <ul className="category-list">
            <li>Pizzas</li>
            <li>Salads</li>
            <li>Beverages</li>
            <li>Snacks</li>
            <li>Other Items</li>
          </ul>
        </div>

        {/* Center Menu Section */}
        <div className="menu-content">
          <h2 className="menu-header">Menu</h2>
          <div className="menu-cards">
            {menuItems.map((item) => (
              <Card2
                key={item.id}
                title={item.name}
                image={item.image}
                price={item.price}
                pizzaSize={item.size}
              />
            ))}
          </div>
        </div>

        {/* Right Checkout Section */}
        <div className="checkout-section">
          <h3>Order Summary</h3>
          <ul className="order-list">
            <li>Pizza Margherita - Rs. 1200</li>
            <li>Veggie Supreme - Rs. 1400</li>
          </ul>
          <div className="total-price">
            <p>Total: Rs. 2600</p>
          </div>
          <button className="checkout-button">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
