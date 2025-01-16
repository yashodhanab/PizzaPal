import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3 className="footer-title">About PizzaPal</h3>
          <p className="footer-text">
            PizzaPal delivers the best pizzas, desserts, and beverages straight to your home. Taste the difference!
          </p>
        </div>
        <div className="footer-section links">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-list">
            <li><a href="#menu">Menu</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h3 className="footer-title">Contact Us</h3>
          <p>Email: <a href="mailto:support@pizzapal.com">support@pizzapal.com</a></p>
          <p>Phone: +94 123 456 789</p>
          <p>Address: Galle, Colombo, and Jaffna, Sri Lanka</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 PizzaPal. All rights reserved.</p>
      </div>
    </footer>
  );
}
