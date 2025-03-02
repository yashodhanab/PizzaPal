// import React from 'react';
// import './login2.css'; // External CSS file for styling


// const SignInPage = () => {
//   return (
//     <div className="signin-container">
//       <div className="signin-left">
//         <div className="website-description">
//           <h1>Welcome to PizzaPal!</h1>
//           <p>Your one-stop destination for delicious, customizable pizzas, desserts, and beverages. Enjoy dine-in or order online for home delivery. Experience the taste of perfection!</p>
//         </div>
//         <img 
//           src="Pizza-3007395.jpg" 
//           alt="Delicious Pizza" 
//           className="signin-image" 
//         />
//       </div>
//       <div className="signin-right">
//         <div className="signin-form-container">
//           <h2 className="signin-title">Sign In</h2>
//           <p className="signin-subtitle">Access your account to order your favorites!</p>
//           <form>
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
//                 placeholder="Enter your password" 
//                 required 
//               />
//             </div>
//             <div className="signin-options">
//               <label>
//                 <input type="checkbox" /> Remember Me
//               </label>
//               <a href="#" className="forgot-password">Forgot Password?</a>
//             </div>
//             <button type="submit" className="signin-button">Sign In</button>
//           </form>
//           <p className="signin-footer">
//             New here? <a href="#">Create an account</a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignInPage;


import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './login2.css'; // External CSS file for styling

const SignInPage = () => {
  const navigate = useNavigate(); // Initialize navigate hook

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    // After successful login (assuming login logic is added), navigate to another page
    navigate('/home'); // Replace '/home' with the route you want to navigate to after login
  };

  return (
    <div className="signin-container">
      <div className="signin-left">
        <div className="website-description">
          <h1>Welcome to PizzaPal!</h1>
          <p>Your one-stop destination for delicious, customizable pizzas, desserts, and beverages. Enjoy dine-in or order online for home delivery. Experience the taste of perfection!</p>
        </div>
        <img 
          src="Pizza-3007395.jpg" 
          alt="Delicious Pizza" 
          className="signin-image" 
        />
      </div>
      <div className="signin-right">
        <div className="signin-form-container">
          <h2 className="signin-title">Sign In</h2>
          <p className="signin-subtitle">Access your account to order your favorites!</p>
          <form onSubmit={handleSubmit}> {/* Attach handleSubmit to form */}
            <div className="input-group">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                placeholder="Enter your email" 
                required 
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                placeholder="Enter your password" 
                required 
              />
            </div>
            <div className="signin-options">
              <label>
                <input type="checkbox" /> Remember Me
              </label>
              <a href="null" className="forgot-password">Forgot Password?</a>
            </div>
            <button type="submit" className="signin-button">Sign In</button>
          </form>
          <p className="signin-footer">
            New here? <a href="#">Create an account</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
