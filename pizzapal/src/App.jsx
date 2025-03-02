// import React from 'react'
// import Navigation from './Navbar/Navigation.jsx'

// import HeroSection from './hero/HeroSection.jsx'
// import MenuSection from './menu/MenuSection.jsx'
// import MenuCategory from './menu/MenuCategory.jsx'
// import Card from './Card/Card.jsx'
// import ViewButton from './viewButton/ViewButton.jsx'
// import './App.css'
// import Footer from './Footer/Footer.jsx';
// import Home from './Home/home.jsx'
// import Menupage from './Menupage/menupage.jsx'

// import AboutUs2 from './Aboutus2/aboutus2.jsx'
// import Login from './Login/login.jsx'
// import SignInPage from './Login2/login2.jsx'
// import OrdersPage from './Ordering/ordering.jsx'
// import TrackingPage from './Tracking/tracking.jsx'
// import OfferPage from './Offers/offers.jsx'
// import NewArrivalsPage from './NewArrivals/NewArrivalsPage.jsx'



// const App = () => {
//   return (
      
//     <div>

//         <Home/>

//         <Menupage/>
//         <NewArrivalsPage/>
//         {/* <AboutUs/> */}

//         <AboutUs2/>

//         {/* <Login/> */}

//         <SignInPage/>

//         <OrdersPage/>

//         <TrackingPage/>

//         <OfferPage/>

//     </div>

  
// );
// }

// export default App
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navigation from './Navbar/Navigation.jsx';
// import Footer from './Footer/Footer.jsx';
// import MenuSection from "./menu/MenuSection.jsx";

// // Importing Pages
// import Home from './Home/home.jsx';
// import Menupage from './Menupage/menupage.jsx';
// import NewArrivalsPage from './NewArrivals/NewArrivalsPage.jsx';
// import AboutUs2 from './Aboutus2/aboutus2.jsx';
// // import Login from './Login/login.jsx';
// import SignInPage from './Login2/login2.jsx';
// import OrdersPage from './Ordering/ordering.jsx';
// import TrackingPage from './Tracking/tracking.jsx';
// import OfferPage from './Offers/offers.jsx';
// // import Contact from "./Contact/Contact.jsx"; 
// // import FAQ from "./FAQ/FAQ.jsx"; 

// import './App.css';

// const App = () => {

//   const location = useLocation();

//   return (
//      <div>
//       {/* Conditionally render Navigation */}
//       {location.pathname !== '/login' && <Navigation />}
      
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/menu" element={<Menupage />} />
//         <Route path="/new-arrivals" element={<NewArrivalsPage />} />
//         <Route path="/about-us" element={<AboutUs2 />} />
//         {/* <Route path="/login" element={<Login />} /> */}
//         <Route path="/login" element={<SignInPage />} />
//         <Route path="/orders" element={<OrdersPage />} />
//         <Route path="/tracking" element={<TrackingPage />} />
//         <Route path="/offers" element={<OfferPage />} />
//         <Route path="/menu" element={<MenuSection />} />
//         {/* <Route path="/menu" element={<Menu />} /> */}
//         {/* <Route path="/about" element={<About />} /> */}
//         {/* <Route path="/contact" element={<Contact />} /> */}
//         {/* <Route path="/faq" element={<FAQ />} /> */}

//       </Routes>

//       <Footer />  {/* Footer appears on all pages */}
//     </div>
//   );
// }

// export default App;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navigation from './Navbar/Navigation.jsx';
import Footer from './Footer/Footer.jsx';
import MenuSection from "./menu/MenuSection.jsx";

// Importing Pages
import Home from './Home/home.jsx';
import Menupage from './Menupage/menupage.jsx';
import NewArrivalsPage from './NewArrivals/NewArrivalsPage.jsx';
import AboutUs2 from './Aboutus2/aboutus2.jsx';
import SignInPage from './Login2/login2.jsx';
import OrdersPage from './Ordering/ordering.jsx';
import TrackingPage from './Tracking/tracking.jsx';
import OfferPage from './Offers/offers.jsx';
import './App.css';

const App = () => {
  return (
    <Router>
      <NavigationWrapper />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menupage />} />
        <Route path="/new-arrivals" element={<NewArrivalsPage />} />
        <Route path="/about-us" element={<AboutUs2 />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/tracking" element={<TrackingPage />} />
        <Route path="/offers" element={<OfferPage />} />
        <Route path="/menu" element={<MenuSection />} />
        <Route path="/null" element={<Home />} />
      </Routes>

      <Footer />  {/* Footer appears on all pages */}
    </Router>
  );
}

// Create a wrapper component for Navigation to use useLocation
const NavigationWrapper = () => {
  const location = useLocation(); // Now inside the Router context

  return (
    <>
      {/* Conditionally render Navigation */}
      {location.pathname !== '/login' && <Navigation />}
    </>
  );
}

export default App;
