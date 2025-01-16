import React from 'react'
import Navigation from '../Navbar/Navigation.jsx'



import HeroSection from '../hero/HeroSection.jsx'
import MenuSection from '../menu/MenuSection.jsx'
import MenuCategory from '../menu/MenuCategory.jsx'
import Card from '../Card/Card.jsx'
import ViewButton from '../viewButton/ViewButton.jsx'

import Footer from '../Footer/Footer.jsx';
import '../App.css';
import './home.css';

function Home(){

    return(
        
<div className="container">


        
            <Navigation/>
            <HeroSection/>
        
       
        <MenuSection>
          <MenuCategory />
        </MenuSection>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <ViewButton/>
        <Footer/>

</div>
        
          
    );

} 

export default Home;