import React from 'react'
import Navigation from './Navbar/Navigation.jsx'

import HeroSection from './hero/HeroSection.jsx'
import MenuSection from './menu/MenuSection.jsx'
import MenuCategory from './menu/MenuCategory.jsx'
import Card from './Card/Card.jsx'
import ViewButton from './viewButton/ViewButton.jsx'
import './App.css'
import Footer from './Footer/Footer.jsx';
import Home from './Home/home.jsx'
import Menupage from './Menupage/menupage.jsx'

import AboutUs2 from './Aboutus2/aboutus2.jsx'
import Login from './Login/login.jsx'
import SignInPage from './Login2/login2.jsx'
import OrdersPage from './Ordering/ordering.jsx'
import TrackingPage from './Tracking/tracking.jsx'
import OfferPage from './Offers/offers.jsx'

const App = () => {
  return (
    <div>

        <Home/>

        <Menupage/>

        {/* <AboutUs/> */}

        <AboutUs2/>

        {/* <Login/> */}

        <SignInPage/>

        <OrdersPage/>

        <TrackingPage/>

        <OfferPage/>

    </div>
  )
}

export default App