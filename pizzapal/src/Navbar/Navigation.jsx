// import React from 'react';
// import { NavigationLink } from './NavigationLink';
// import styles from './NavigationStyles.module.css';

// const navigationItems = [
//   'Home',
//   'Deals',
//   'Menu',
//   'About Us',
//   'Contact',
//   'Null',
//   'Null2'
// ];

// const Navigation = () => {
//   return (
//     <nav className={styles.navigationContainer} role="navigation">
//       <div className={styles.locationWrapper}>
        
//         <div className={styles.mainNavigation}>
//           <div className={styles.navigationLinks}>
//             <div className={styles.logoContainer}>
//               <img
//                 loading="lazy"
//                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d3677ed6694dfdeb382b6964423ff6ce30eeeee44d0ae8a98c6444143ffde30?placeholderIfAbsent=true&apiKey=60be45b0adc94c48bda62e208f8c9c91"
//                 className={styles.logo}
//                 alt="Company Logo"
//               />
//             </div>
//             {navigationItems.map((item, index) => (
//               <NavigationLink 
//                 key={item} 
//                 text={item}
//                 tabIndex={0}
//               />
//             ))}
//           </div>
//           <div className={styles.authContainer}>
//             <button 
//               className={styles.loginButton}
//               tabIndex={0}
//               aria-label="Log in"
//             >
//               Log in
//             </button>
//             <div 
//               className={styles.userIcon}
//               role="img" 
//               aria-label="User profile icon"
//             />
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navigation;

////////////////////////////////////////////////////////////////////////////////////////////////////////

import styles from './NavigationStyles.module.css';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const navItems = [
  { text: 'Home', href: '/' },
  { text: 'Menu', href: '/menu' },
  { text: 'Offers', href: '/offers' },
  { text: 'About Us', href: '/about-us' },
  { text: 'Orders', href: '/orders' },
];

function Navigation() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Check if the user is logged in on component mount
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) {
      setUser(userData);
    }
  }, []);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('user'); // Clear user data from local storage
    setUser(null); // Update state to reflect logged-out status
    navigate('/login'); // Navigate to the login page
  };

  return (
    <nav className={styles.navigationBar}>
      <div className={styles.navigationContent}>
        <div className={styles.navigationLinks}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d3677ed6694dfdeb382b6964423ff6ce30eeeee44d0ae8a98c6444143ffde30?placeholderIfAbsent=true&apiKey=60be45b0adc94c48bda62e208f8c9c91"
            className={styles.logo}
            alt="Company Logo"
          />
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={styles.navLink}
              tabIndex="0"
            >
              {item.text}
            </a>
          ))}
        </div>

        <div className={styles.userSection}>
          {user ? (
            // Display username and logout button if user is logged in
            <>
              <span className={styles.userName}>{user.name}</span>
              <button onClick={handleLogout} className={styles.loginButton}>
                <span className={styles.loginText}>Logout</span>
                <div className={styles.loginIcon} aria-label="Logout icon"></div>
              </button>
            </>
          ) : (
            // Display login button if user is not logged in
            <Link to="/login" className={styles.loginButton}>
              <span className={styles.loginText}>Log in</span>
              <div className={styles.loginIcon} aria-label="Login icon"></div>
            </Link>
          )}
          <div className={styles.userAvatar} role="img" aria-label="User avatar" />
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

