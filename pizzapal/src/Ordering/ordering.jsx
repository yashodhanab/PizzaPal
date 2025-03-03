import React from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import "./ordering.css"; // External CSS file for styling

const OrdersPage = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Retrieve the latest order from local storage
  const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
  const latestOrder = storedOrders[storedOrders.length - 1]; // Get the most recent order

  const handleOrderMore = () => {
    // Redirect logic for ordering more items (e.g., navigate to menu page)
    navigate("/menu"); // Use navigate instead of window.location.href
  };

  const handleTrackOrder = () => {
    navigate("/tracking"); // Navigate to the tracking page
  };

  return (
    <div className="orders-container">
      <h1 className="orders-title">Your Orders</h1>
      {latestOrder ? (
        <div className="orders-list">
          <div className="order-card">
            <div className="order-header">
              <h2>Order #{latestOrder.id}</h2>
              <span className="delivery-time">Delivery: 45 minutes</span> {/* Placeholder */}
            </div>
            <div className="order-items">
              {/* Display the order details */}
              <div className="order-item">
                <span>{latestOrder.item_name}</span>
                <span>Rs. {latestOrder.item_price}</span>
              </div>
            </div>
            <div className="order-footer">
              <span className="total-price">
                Total: Rs. {latestOrder.item_price} {/* Display total price */}
              </span>
              <span className="tracking-status">On the Way</span> {/* Placeholder */}
            </div>
            <button
              className="track-order-button"
              onClick={handleTrackOrder} // Add onClick handler to track the order
            >
              Track Order
            </button>
          </div>
        </div>
      ) : (
        <p className="no-orders-message">No orders found. Start ordering now!</p>
      )}

      {/* Order More Items Section */}
      <div className="order-more-container">
        <h2>Craving More?</h2>
        <p>Browse our menu to add more delicious items to your order!</p>
        <button
          className="order-more-button"
          onClick={handleOrderMore}
        >
          Order More Items
        </button>
      </div>
    </div>
  );
};

export default OrdersPage;