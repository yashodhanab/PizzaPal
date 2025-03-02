import React, { useState } from 'react';
import './menuPage.css';
import Card2 from '../Card2/Card2'; // Assuming you already have a Card component

const MenuPage = () => {
  // State for selected category
  const [selectedCategory, setSelectedCategory] = useState('Pizzas');

   // State for the cart
   const [cart, setCart] = useState([]);

  // Full menu items list
  const menuItems = [
    // Pizzas
    { id: 1, name: 'Margherita Pizza', image: '/pizza1.jpg', price: 3200, size: 'Medium', category: 'Pizzas' },
    { id: 2, name: 'Veggie Supreme Pizza', image: '/1(5).jpg', price: 4400, size: 'Large', category: 'Pizzas' },
    { id: 3, name: 'Pepperoni Pizza', image: '1 (4).jpg', price: 2500, size: 'Large', category: 'Pizzas' },
    { id: 4, name: 'Cheese Delight Pizza', image: '1 (1).jpg', price: 4300, size: 'Medium', category: 'Pizzas' },
    { id: 5, name: 'Hawaiian Pizza', image: '1 (9).jpg', price: 2600, size: 'Large', category: 'Pizzas' },
    { id: 6, name: 'BBQ Chicken Pizza', image: '1 (10).jpg', price: 4700, size: 'Medium', category: 'Pizzas' },
    { id: 7, name: 'Four Cheese Pizza', image: '/pizza4.jpg', price: 1800, size: 'Large', category: 'Pizzas' },
    { id: 8, name: 'Seafood Pizza', image: '/pizza5.jpg', price: 2000, size: 'Medium', category: 'Pizzas' },
  
    // Salads
    { id: 9, name: 'Caesar Salad', image: '1 (12).jpg', price: 500, size: 'Regular', category: 'Salads' },
    { id: 10, name: 'Greek Salad', image: '1 (18).jpg', price: 550, size: 'Regular', category: 'Salads' },
    { id: 11, name: 'Caprese Salad', image: '1 (19).jpg', price: 600, size: 'Regular', category: 'Salads' },
    { id: 12, name: 'Cobb Salad', image: '1 (20).jpg', price: 650, size: 'Regular', category: 'Salads' },
  
    // Beverages
    { id: 13, name: 'Lemonade', image: '1 (14).jpg', price: 350, size: 'Regular', category: 'Beverages' },
    { id: 14, name: 'Cold Coffee', image: '1 (15).jpg', price: 400, size: 'Regular', category: 'Beverages' },
    { id: 15, name: 'Iced Tea', image: '1 (21).jpg', price: 450, size: 'Regular', category: 'Beverages' },
    { id: 16, name: 'Orange Juice', image: '1 (22).jpg', price: 350, size: 'Regular', category: 'Beverages' },
  
    // Snacks
    { id: 17, name: 'Garlic Bread', image: '1 (16).jpg', price: 600, size: 'Regular', category: 'Snacks' },
    { id: 18, name: 'Cheese Sticks', image: '1 (23).jpg', price: 500, size: 'Regular', category: 'Snacks' },
    { id: 19, name: 'Breadsticks', image: '1 (24).jpg', price: 450, size: 'Regular', category: 'Snacks' },
    { id: 20, name: 'Mozzarella Sticks', image: '1 (25).jpg', price: 550, size: 'Regular', category: 'Snacks' },
  
    // Desserts
    { id: 21, name: 'Chocolate Lava Cake', image: '1 (26).jpg', price: 500, size: 'Regular', category: 'Desserts' },
    { id: 22, name: 'Tiramisu', image: '1 (27).jpg', price: 450, size: 'Regular', category: 'Desserts' },
    { id: 23, name: 'Cheesecake', image: '1 (28).jpg', price: 600, size: 'Regular', category: 'Desserts' },
    { id: 24, name: 'Fruit Salad', image: '1 (29).jpg', price: 400, size: 'Regular', category: 'Desserts' },
  
    // Combos
    { id: 25, name: 'Pizza + Drink Combo', image: '1 (30).jpg', price: 1700, size: 'Medium', category: 'Combos' },
    { id: 26, name: 'Pizza + Salad Combo', image: '1 (31).jpg', price: 1800, size: 'Medium', category: 'Combos' },
    { id: 27, name: 'Pizza + Snack Combo', image: '1 (32).jpg', price: 1900, size: 'Large', category: 'Combos' },
    { id: 28, name: 'Pizza + Dessert Combo', image: '1 (33).jpg', price: 2000, size: 'Medium', category: 'Combos' },
  
    // Specials
    { id: 29, name: 'Chef’s Special Pizza', image: '1 (34).jpg', price: 2200, size: 'Large', category: 'Specials' },
    { id: 30, name: 'Veggie Delight Special', image: '1 (35).jpg', price: 2100, size: 'Medium', category: 'Specials' },
    { id: 31, name: 'BBQ Feast Special', image: '1 (36).jpg', price: 2400, size: 'Large', category: 'Specials' },
    { id: 32, name: 'Family Special Combo', image: '1 (37).jpg', price: 2500, size: 'Large', category: 'Specials' }
  ];
  

  // Categories list
  const categories = ['Pizzas', 'Salads', 'Beverages', 'Snacks', 'Desserts', 'Combos', 'Specials'];

  // Filter menu items based on selected category
  const filteredItems = menuItems.filter(item => item.category === selectedCategory);

    // Method to add item to cart
    const addToCart = (item) => {
      setCart((prevCart) => [...prevCart, item]);
    };
  
    // Calculate total price of the cart
    const calculateTotal = () => {
      return cart.reduce((total, item) => total + item.price, 0);
    };
    
  return (
    <div className="menu-page">
      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" className="search-input" placeholder="Search categories..." />
      </div>

      <div className="menu-design">
        {/* Left Sidebar (Category Selection) */}
        <div className="category-sidebar">
          <h3 className="category-title">CATEGORIES</h3>
          <ul className="category-list">
            {categories.map(category => (
              <li
                key={category}
                className={selectedCategory === category ? 'active' : ''}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Center Menu Section */}
        <div className="menu-content">
          <h2 className="menu-header">{selectedCategory}</h2>
          <div className="menu-cards">
            {filteredItems.map((item) => (
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
