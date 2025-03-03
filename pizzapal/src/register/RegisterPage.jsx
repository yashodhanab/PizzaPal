// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './register.css'; 

// const RegisterPage = () => {
//   const navigate = useNavigate();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     navigate('/home'); 
//   };

//   return (
//     <div className="register-container">
//       <div className="register-left">
//         <div className="website-description">
//           <h1>Join PizzaPal!</h1>
//           <p>Create an account to customize your pizza, track your orders, and enjoy exclusive deals!</p>
//         </div>
//         <img 
//           src="Pizza-3007395.jpg" 
//           alt="Delicious Pizza" 
//           className="register-image" 
//         />
//       </div>
//       <div className="register-right">
//         <div className="register-form-container">
//           <h2 className="register-title">Sign Up</h2>
//           <p className="register-subtitle">Create your account to get started!</p>
//           <form onSubmit={handleSubmit}>
//             <div className="input-group">
//               <label htmlFor="name">Full Name</label>
//               <input 
//                 type="text" 
//                 id="name" 
//                 placeholder="Enter your full name" 
//                 required 
//               />
//             </div>
//             <div className="input-group">
//               <label htmlFor="email">Email Address</label>
//               <input 
//                 type="email" 
//                 id="email" 
//                 placeholder="Enter your email" 
//                 required 
//               />
//             </div>
//             <div className="input-group">
//               <label htmlFor="password">Password</label>
//               <input 
//                 type="password" 
//                 id="password" 
//                 placeholder="Create a password" 
//                 required 
//               />
//             </div>
//             <div className="input-group">
//               <label htmlFor="confirm-password">Confirm Password</label>
//               <input 
//                 type="password" 
//                 id="confirm-password" 
//                 placeholder="Confirm your password" 
//                 required 
//               />
//             </div>
//             <button type="submit" className="register-button">Sign Up</button>
//           </form>
//           <p className="register-footer">
//             Already have an account? <a href="/login">Sign In</a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './register.css'; 

const RegisterPage = () => {
  const navigate = useNavigate();

  // Define state to hold form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // Handle input changes for form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission (send data to backend)
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      // Send data to backend using Axios
      const response = await axios.post('http://localhost:5000/register', {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      // If successful, redirect to home page
      if (response.status === 201) {
        alert("Registration successful!");
        console.log("User registered successfully!", response.data);
        navigate('/login');
      }
    } catch (error) {
      console.error("There was an error registering the user!", error);
      alert("Registration failed! Please try again.");
    }
  };

  return (
    <div className="register-container">
      <div className="register-left">
        <div className="website-description">
          <h1>Join PizzaPal!</h1>
          <p>Create an account to customize your pizza, track your orders, and enjoy exclusive deals!</p>
        </div>
        <img 
          src="Pizza-3007395.jpg" 
          alt="Delicious Pizza" 
          className="register-image" 
        />
      </div>
      <div className="register-right">
        <div className="register-form-container">
          <h2 className="register-title">Sign Up</h2>
          <p className="register-subtitle">Create your account to get started!</p>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="name">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                placeholder="Enter your full name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                placeholder="Enter your email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                name="password"
                placeholder="Create a password" 
                value={formData.password}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="input-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input 
                type="password" 
                id="confirm-password" 
                name="confirmPassword"
                placeholder="Confirm your password" 
                value={formData.confirmPassword}
                onChange={handleChange}
                required 
              />
            </div>
            <button type="submit" className="register-button">Sign Up</button>
          </form>
          <p className="register-footer">
            Already have an account? <a href="/login">Sign In</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
