import React, { useState } from 'react';
import './menuPage.css';
import Card2 from '../Card2/Card2'; // Ensure correct import
import { Link, useNavigate } from 'react-router-dom';

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Pizzas');
  const [cart, setCart] = useState([]);
  const [showPopup, setShowPopup] = useState(false); 
  const navigate = useNavigate(); // Initialize navigate hook

  const menuItems = [
    { id: 1, name: 'Margherita Pizza', image: '/pizza1.jpg', price: 3200, size: 'Medium', category: 'Pizzas' },
    { id: 2, name: 'Veggie Supreme Pizza', image: '/1(5).jpg', price: 4400, size: 'Large', category: 'Pizzas' },
    { id: 3, name: 'Pepperoni Pizza', image: '/1 (4).jpg', price: 2500, size: 'Large', category: 'Pizzas' },
    { id: 4, name: 'Cheese Delight Pizza', image: '/1 (1).jpg', price: 4300, size: 'Medium', category: 'Pizzas' },
    { id: 5, name: 'Hawaiian Pizza', image: '/1 (9).jpg', price: 2600, size: 'Large', category: 'Pizzas' },
    { id: 6, name: 'BBQ Chicken Pizza', image: '/1 (10).jpg', price: 4700, size: 'Medium', category: 'Pizzas' },
    { id: 7, name: 'Four Cheese Pizza', image: '/1 (8).jpg', price: 1800, size: 'Large', category: 'Pizzas' },
    { id: 8, name: 'Seafood Pizza', image: '/1 (11).jpg', price: 2000, size: 'Medium', category: 'Pizzas' },

    { id: 9, name: 'Caesar Salad', image: '/salad(1).jpg', price: 500, size: 'Regular', category: 'Salads' },
    { id: 10, name: 'Greek Salad', image: '/salad(2).jpg', price: 550, size: 'Regular', category: 'Salads' },

    { id: 13, name: 'Coke', image: '/coke.jpg', price: 350, size: 'Regular', category: 'Beverages' },
    { id: 14, name: 'Milkshake', image: '/milkshake.jpg', price: 400, size: 'Regular', category: 'Beverages' },

    { id: 17, name: 'Garlic Bread', image: '/garlicbread.jpg', price: 600, size: 'Regular', category: 'Snacks' },
    { id: 18, name: 'Cheese Sticks', image: '/cheasesticks.jpg', price: 500, size: 'Regular', category: 'Snacks' },

    { id: 21, name: 'Chocolate Lava Cake', image: '/lavacake.jpg', price: 500, size: 'Regular', category: 'Desserts' },
    { id: 22, name: 'Cheesecake', image: '/cheesecake.jpg', price: 450, size: 'Regular', category: 'Desserts' },
  ];

  const categories = ['Pizzas', 'Salads', 'Beverages', 'Snacks', 'Desserts'];

  const filteredItems = menuItems.filter(item => item.category === selectedCategory);

  const addToCart = (item) => {
    setCart(prevCart => [...prevCart, item]);
  };

  const calculateTotal = () => cart.reduce((total, item) => total + item.price, 0);


  // Handle Checkout Button Click
  const handleCheckout = () => {
    if (cart.length > 0) {
      setShowPopup(true);
    }
  };

  // Close the popup
  const closePopup = () => {
    setShowPopup(false);
  };

return (
    <div className="menu-page">
      <div className="menu-design">
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
                addToCart={() => addToCart(item)}
              />
            ))}
          </div>
        </div>

        <div className="checkout-section">
          <h3>Order Summary</h3>
          <ul className="order-list">
            {cart.length === 0 ? (
              <li>Your cart is empty</li>
            ) : (
              cart.map((item, index) => (
                <li key={index}>
                  {item.name} - Rs. {item.price}
                </li>
              ))
            )}
          </ul>
          <div className="total-price">
            <p>Total: Rs. {calculateTotal()}</p>
          </div>
          <button className="checkout-button" disabled={cart.length === 0} onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </div>

      {/* Order Confirmation Popup */}
      {showPopup && (
  <div className="popup-overlay">
    <div className="popup">
      <h2>Confirm Your Order</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.name} - Rs. {item.price}</li>
        ))}
      </ul>
      <p>Total: Rs. {calculateTotal()}</p>
      <button
        className="confirm-button"
        onClick={async () => {
          try {
            // Get user email from local storage
            const user = JSON.parse(localStorage.getItem('user'));
            if (!user || !user.email) {
              alert('User not logged in');
              return;
            }

            // Prepare order data
            const orderData = {
              userEmail: user.email,
              items: cart.map((item) => ({
                item_name: item.name,
                item_price: item.price,
              })),
            };

            // Send order data to the backend
            const response = await fetch('http://localhost:5000/add_order', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(orderData),
            });

            if (response.ok) {
              const result = await response.json();
              alert('Order placed successfully!');
              navigate('/orders')

              // Save order data to local storage
              const orders = JSON.parse(localStorage.getItem('orders')) || [];
              
              orders.push(result.order);
              localStorage.setItem('orders', JSON.stringify(orders));
              console.log('Local Storage Orders:', JSON.parse(localStorage.getItem('orders')));

              // Close the popup and clear the cart
              closePopup();
              setCart([]); // Assuming you have a setCart function to clear the cart
            } else {
              const errorData = await response.json();
              alert(`Failed to place order: ${errorData.message}`);
            }
          } catch (error) {
            console.error('Error placing order:', error);
            alert('An error occurred. Please try again.');
          }
        }}
      >
        Confirm Order
      </button>
      <button className="cancel-button" onClick={closePopup}>
        Cancel
      </button>
    </div>
  </div>
)}

    </div>
  );
};

export default MenuPage;