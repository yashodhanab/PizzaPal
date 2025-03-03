import React, { useState } from 'react';
import axios from 'axios';

const Checkout = () => {
  const [name, setName] = useState('');
  const [pizzaType, setPizzaType] = useState('');
  const [price, setPrice] = useState('');
  const [status, setStatus] = useState('');

  const handleCheckout = async () => {
    const orderData = {
      name,
      pizza_type: pizzaType,
      price: parseFloat(price),
    };

    try {
      const response = await axios.post('http://localhost:5000/api/orders', orderData);
      alert(response.data.message); // Show success message
      setStatus('Order placed successfully!');
    } catch (error) {
      console.error('Error placing order:', error);
      setStatus('Failed to place order.');
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <input 
        type="text" 
        placeholder="Your Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Pizza Type" 
        value={pizzaType} 
        onChange={(e) => setPizzaType(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Price" 
        value={price} 
        onChange={(e) => setPrice(e.target.value)} 
      />
      <button onClick={handleCheckout}>Checkout</button>
      <p>{status}</p>
    </div>
  );
};

export default Checkout;
