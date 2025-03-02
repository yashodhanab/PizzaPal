// import React from "react";
// import "./ordering.css"; // External CSS file for styling



// const OrdersPage = () => {
//   const orders = [
//     {
//       id: 1,
//       items: [
//         { name: "Margherita Pizza", quantity: 1 },
//         { name: "Garlic Bread", quantity: 2 },
//         { name: "Coke", quantity: 1 },
//       ],
//       total: "$25.99",
//       deliveryTime: "45 minutes",
//       trackingStatus: "On the Way",
//     },
//     {
//       id: 2,
//       items: [
//         { name: "Pepperoni Pizza", quantity: 1 },
//         { name: "Cheesecake", quantity: 1 },
//       ],
//       total: "$29.99",
//       deliveryTime: "30 minutes",
//       trackingStatus: "Preparing",
//     },
//   ];

//   const handleOrderMore = () => {
//     // Redirect logic for ordering more items (e.g., navigate to menu page)
//     window.location.href = "/menu"; // Update this path based on your routing setup
//   };

//   return (
//     <div className="orders-container">
//       <h1 className="orders-title">Your Orders</h1>
//       <div className="orders-list">
//         {orders.map((order) => (
//           <div key={order.id} className="order-card">
//             <div className="order-header">
//               <h2>Order #{order.id}</h2>
//               <span className="delivery-time">Delivery: {order.deliveryTime}</span>
//             </div>
//             <div className="order-items">
//               {order.items.map((item, index) => (
//                 <div key={index} className="order-item">
//                   <span>{item.name}</span>
//                   <span>x{item.quantity}</span>
//                 </div>
//               ))}
//             </div>
//             <div className="order-footer">
//               <span className="total-price">Total: {order.total}</span>
//               <span className="tracking-status">{order.trackingStatus}</span>
//             </div>
//             <button className="track-order-button">Track Order</button>
//           </div>
//         ))}
//       </div>

//       {/* Order More Items Section */}
//       <div className="order-more-container">
//         <h2>Craving More?</h2>
//         <p>Browse our menu to add more delicious items to your order!</p>
//         <button
//           className="order-more-button"
//           onClick={handleOrderMore}
//         >
//           Order More Items
//         </button>
//       </div>
//     </div>
//   );
// };

// export default OrdersPage;


import React from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import "./ordering.css"; // External CSS file for styling

const OrdersPage = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const orders = [
    {
      id: 1,
      items: [
        { name: "Margherita Pizza", quantity: 1 },
        { name: "Garlic Bread", quantity: 2 },
        { name: "Coke", quantity: 1 },
      ],
      total: "$25.99",
      deliveryTime: "45 minutes",
      trackingStatus: "On the Way",
    },
    {
      id: 2,
      items: [
        { name: "Pepperoni Pizza", quantity: 1 },
        { name: "Cheesecake", quantity: 1 },
      ],
      total: "$29.99",
      deliveryTime: "30 minutes",
      trackingStatus: "Preparing",
    },
  ];

  const handleOrderMore = () => {
    // Redirect logic for ordering more items (e.g., navigate to menu page)
    window.location.href = "/menu"; // Update this path based on your routing setup
  };

  const handleTrackOrder = () => {
    navigate("/tracking"); // Navigate to the tracking page
  };

  return (
    <div className="orders-container">
      <h1 className="orders-title">Your Orders</h1>
      <div className="orders-list">
        {orders.map((order) => (
          <div key={order.id} className="order-card">
            <div className="order-header">
              <h2>Order #{order.id}</h2>
              <span className="delivery-time">Delivery: {order.deliveryTime}</span>
            </div>
            <div className="order-items">
              {order.items.map((item, index) => (
                <div key={index} className="order-item">
                  <span>{item.name}</span>
                  <span>x{item.quantity}</span>
                </div>
              ))}
            </div>
            <div className="order-footer">
              <span className="total-price">Total: {order.total}</span>
              <span className="tracking-status">{order.trackingStatus}</span>
            </div>
            <button 
              className="track-order-button" 
              onClick={handleTrackOrder} // Add onClick handler to track the order
            >
              Track Order
            </button>
          </div>
        ))}
      </div>

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
