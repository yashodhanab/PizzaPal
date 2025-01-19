import React from 'react';
import styles from './offers.module.css';

const offers = [
  {
    id: 1,
    title: "Pizza Feast Special",
    description: "Get a Large Pizza with 2 Toppings for only $15.99! Limited time offer.",
    discount: "25% OFF",
    image: "offer3.jpg",
  },
  {
    id: 2,
    title: "Dessert Delight",
    description: "Free dessert with every pizza order over $20! Sweeten your deal today.",
    discount: "Free Dessert",
    image: "offer3.jpg",
  },
  {
    id: 3,
    title: "Family Combo Deal",
    description: "Order 2 Large Pizzas and get 1 Free Drink! Perfect for family meals.",
    discount: "Buy 2 Get 1 Free",
    image: "offer4.jpg",
  },
];

const OfferPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Special Offers</h1>
      <div className={styles.offerList}>
        {offers.map((offer) => (
          <div key={offer.id} className={styles.offerCard}>
            <img
              src={offer.image}
              alt={offer.title}
              className={styles.offerImage}
            />
            <div className={styles.offerContent}>
              <h2 className={styles.offerTitle}>{offer.title}</h2>
              <p className={styles.offerDescription}>{offer.description}</p>
              <div className={styles.offerDiscount}>{offer.discount}</div>
              <button className={styles.offerButton}>Claim Offer</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferPage;
