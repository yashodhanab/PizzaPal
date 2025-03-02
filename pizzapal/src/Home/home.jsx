// import React from 'react'
// import Navigation from '../Navbar/Navigation.jsx'



// import HeroSection from '../hero/HeroSection.jsx'
// import MenuSection from '../menu/MenuSection.jsx'
// import MenuCategory from '../menu/MenuCategory.jsx'
// import Card from '../Card/Card.jsx'
// import ViewButton from '../viewButton/ViewButton.jsx'

// import Footer from '../Footer/Footer.jsx';
// import '../App.css';
// import './home.css';

// import { Link } from "react-router-dom";

// function Home(){

//     return(
        
// <div className="container">


        
//             <Navigation/>
//             <HeroSection/>
        
       
//         {/* <MenuSection>
//           <MenuCategory />
//         </MenuSection> */}
//         {/* <Card title="Margherita Pizza" imageSrc="margherita.png" prepTime="15 Mins" />
//         <Card title="Margherita Pizza" imageSrc="margherita.png" prepTime="15 Mins" />
//         <Card title="Margherita Pizza" imageSrc="margherita.png" prepTime="15 Mins" />
//         <Card title="Margherita Pizza" imageSrc="margherita.png" prepTime="15 Mins" />
//         <Card title="Margherita Pizza" imageSrc="margherita.png" prepTime="15 Mins" /> */}


//         <ViewButton/>
//         <Footer/>

// </div>
        
          
//     );

// } 

// export default Home;

import React from 'react';
import HeroSection from '../hero/HeroSection.jsx';
import ViewButton from '../viewButton/ViewButton.jsx';
import '../App.css';
import './home.css';

function Home() {
  return (
    <div className="container">
      <HeroSection />
      <ViewButton />
    </div>
  );
}

export default Home;
