import * as React from "react";
import styles from './HeroSection.module.css';
import Navigation from "../Navbar/Navigation";

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      
      <div className={styles.heroContainer}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c915f31843b4948bc349d90a1b42f9ef7760eb8cbfc6344ce6678da5e90109ef?placeholderIfAbsent=true&apiKey=60be45b0adc94c48bda62e208f8c9c91"
          className={styles.heroBackground}
          alt="Pizza restaurant ambiance"
        />
        <h1 className={styles.heroTitle}>
          Its Not Just a Pizza. It's an experience
        </h1>
        <p className={styles.heroDescription}>
          Welcome to PizzaPal – your ultimate destination for handcrafted
          pizzas, desserts, and beverages! With locations in Galle, Colombo,
          and Jaffna, we bring you the joy of pizza your way. Customize your
          favorite flavors, order from the comfort of your home, or enjoy a
          cozy dine-in experience. PizzaPal – where every slice is a
          celebration of taste!
        </p>
        <button 
          className={styles.ctaButton}
          onClick={() => {}}
          tabIndex={0}
          aria-label="Order Now"
        >
          Order Now
        </button>
      </div>
    </section>
  );
}