import React from 'react'
import Navigation from './Navbar/Navigation.jsx'
import PizzaDelivery from './pizzaDelivery/PizzaDelivery.jsx'
import PizzaPalHero from './Imageinmiddle/PizzaPalHero.jsx'
import PizzaCard from './Cards/Pizzalis.jsx'
import HeroSection from './hero/HeroSection.jsx'
import MenuSection from './menu/MenuSection.jsx'
import MenuCategory from './menu/MenuCategory.jsx'
import Card from './Card/Card.jsx'
import './App.css'

const App = () => {
  return (
    <div className='çontainer'>
      <Navigation>
        
      </Navigation>

      {/* <PizzaDelivery>

      </PizzaDelivery>


      <PizzaPalHero>

      </PizzaPalHero> */}

      <HeroSection>

      </HeroSection>

      <MenuSection>
        <MenuCategory />
      </MenuSection>

      <Card/>






    </div>
  )
}

export default App