import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom'; 

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
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
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
