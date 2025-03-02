
import React from 'react';
import './aboutus2.css'; // Import the CSS file for styling

const AboutUs2 = () => {
  return (
    <div className="about-us-page">
      <section className="about-us-header">
        <h1>About Us</h1>
        <p>Your favorite pizza place, serving the best pizzas with a passion!</p>
      </section>

      <section className="about-us-content">
        <div className="story">
          <h2>Our Story</h2>
          <p>
            Born out of love for pizza, we started our journey with a dream to deliver mouthwatering pizzas made from the finest ingredients. With a touch of tradition and a sprinkle of innovation, we serve you a pizza experience like no other.
          </p>
        </div>

        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            We aim to provide the best pizza, delivered with love and care. From fresh toppings to a crispy crust, our mission is to create unforgettable experiences for our customers, one pizza at a time.
          </p>
        </div>

        <div className="contact">
          <h2>Contact Us</h2>
          <p>If you want to know more or just want to chat about pizza, we’re always here!</p>
          <ul>
            <li>Email: contact@pizzapal.com</li>
            <li>Phone: +94 123 456 789</li>
            <li>Locations: Galle, Colombo, Jaffna</li>
          </ul>
        </div>
      </section>

      {/* <section className="about-us-footer">
        <p>&copy; 2025 PizzaPal. All Rights Reserved.</p>
      </section> */}
    </div>
  );
};

export default AboutUs2;


