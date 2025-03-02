// import React from 'react';
// import styles from './tracking.module.css';


// const TrackingPage = () => {
//   return (
//     <div className={styles.container}>
//       <h1 className={styles.heading}>Track Your Order</h1>
//       <div className={styles.trackingSection}>
//         <div className={styles.progress}>
//           <div className={styles.progressBar}>
//             <div className={styles.progressFill}></div>
//           </div>
//           <div className={styles.status}>
//             <span className={styles.completed}>Order Placed</span>
//             <span className={styles.current}>Preparing</span>
//             <span className={styles.pending}>Out for Delivery</span>
//             <span className={styles.pending}>Delivered</span>
//           </div>
//         </div>
//         <div className={styles.mapSection}>
//           <p>Live Map Tracking</p>
//           {/* Embed Google Maps iframe for live tracking */}
//           <iframe
//             className={styles.mapIframe}
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31740.421209992805!2d80.19139744969817!3d6.0559338378448855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae173bb6932fce3%3A0x4a35b903f9c64c03!2sGalle!5e0!3m2!1sen!2slk!4v1737319502492!5m2!1sen!2slk"
//             width="1000"
//             height="400"
//             style={{ border: 0 }}
//             allowfullscreen=""
//             loading="lazy"
//             referrerpolicy="no-referrer-when-downgrade"
//           ></iframe>
//         </div>
//       </div>
//       <div className={styles.orderSummary}>
//         <h2>Order Summary</h2>
//         <p><strong>Order Number:</strong> #123456</p>
//         <p><strong>Delivery Time:</strong> 45 minutes</p>
//         <p><strong>Total Price:</strong> $25.99</p>
//         <h3>Items Ordered:</h3>
//         <ul className={styles.itemsList}>
//           <li>Margherita Pizza (Medium)</li>
//           <li>Chocolate Lava Cake</li>
//           <li>Coke (500ml)</li>
//         </ul>
//       </div>
//       <div className={styles.actions}>
//         <button className={styles.moreItemsButton}>Order More Items</button>
//         <button className={styles.contactSupportButton}>Contact Support</button>
//       </div>
//     </div>
//   );
// };

// export default TrackingPage;


import React from 'react';
import styles from './tracking.module.css';
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

const TrackingPage = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle redirection when "Order More Items" is clicked
  const handleOrderMore = () => {
    navigate("/menu"); // Navigate to the menu page
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Track Your Order</h1>
      <div className={styles.trackingSection}>
        <div className={styles.progress}>
          <div className={styles.progressBar}>
            <div className={styles.progressFill}></div>
          </div>
          <div className={styles.status}>
            <span className={styles.completed}>Order Placed</span>
            <span className={styles.current}>Preparing</span>
            <span className={styles.pending}>Out for Delivery</span>
            <span className={styles.pending}>Delivered</span>
          </div>
        </div>
        <div className={styles.mapSection}>
          <p>Live Map Tracking</p>
          {/* Embed Google Maps iframe for live tracking */}
          <iframe
            className={styles.mapIframe}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31740.421209992805!2d80.19139744969817!3d6.0559338378448855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae173bb6932fce3%3A0x4a35b903f9c64c03!2sGalle!5e0!3m2!1sen!2slk!4v1737319502492!5m2!1sen!2slk"
            width="1000"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className={styles.orderSummary}>
        <h2>Order Summary</h2>
        <p><strong>Order Number:</strong> #123456</p>
        <p><strong>Delivery Time:</strong> 45 minutes</p>
        <p><strong>Total Price:</strong> $25.99</p>
        <h3>Items Ordered:</h3>
        <ul className={styles.itemsList}>
          <li>Margherita Pizza (Medium)</li>
          <li>Chocolate Lava Cake</li>
          <li>Coke (500ml)</li>
        </ul>
      </div>
      <div className={styles.actions}>
        {/* OnClick event added to navigate to Menu page */}
        <button 
          className={styles.moreItemsButton} 
          onClick={handleOrderMore}
        >
          Order More Items
        </button>
        <button className={styles.contactSupportButton}>Contact Support</button>
      </div>
    </div>
  );
};

export default TrackingPage;
