// import React from 'react';
// import styles from './Card2.module.css'; // Import the CSS module

// const MenuCard = ({ title, description, price, image }) => {
//   return (
//     <div className={styles.card}>
//       <img src={image} alt={title} className={styles.cardImage} />
//       <div className={styles.cardContent}>
//         <h3 className={styles.cardTitle}>{title}</h3>
//         <p className={styles.cardDescription}>{description}</p>
//         <div className={styles.cardFooter}>
//           <span className={styles.cardPrice}>${price}</span>
//           <button className={styles.cardButton}>Add to Cart</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MenuCard;

import React from 'react';
import styles from './Card2.module.css'; // Import the CSS module

const MenuCard = ({ title, description, price, image, pizzaName, pizzaSize }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        {/* <p className={styles.cardDescription}>{description}</p> */}

        {/* Display Pizza Name and Size */}
        <div className={styles.pizzaInfo}>
          <span className={styles.pizzaName}>{pizzaName}</span>
          <span className={styles.pizzaSize}>{pizzaSize}</span>
        </div>

        <div className={styles.cardFooter}>
          <span className={styles.cardPrice}>Rs.{price}</span>
          <button className={styles.cardButton}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;

