import * as React from "react";
import styles from './PizzaPalHero.module.css';

export default function PizzaPalHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/abb915a21ff8adff00e7d4d3dffb57aa2450b6beefc6a8507963db8d1a10c84c?placeholderIfAbsent=true&apiKey=60be45b0adc94c48bda62e208f8c9c91"
          className={styles.heroBackground}
          alt="PizzaPal restaurant ambiance"
        />
        <h1 className={styles.heroText}>
          Welcome to PizzaPal! your ultimate destination for handcrafted pizzas,
          desserts, and beverages! With locations in Galle, Colombo, and Jaffna,
          we bring you the joy of pizza your way. Customize your favorite
          flavors, order from the comfort of your home, or enjoy a cozy dine-in
          experience. PizzaPal – where every slice is a celebration of taste!
        </h1>
      </div>
    </section>
  );
}