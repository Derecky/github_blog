import type { NextPage } from 'next'
import React from 'react'
import { Header } from '../components/Header'
import { MainPage } from '../components/MainPage'
import { BodyContainer } from '../styles/pages/homeStyles'
import { CartContextType, CartContext } from '../context/CartContext'

const Home: NextPage = () => {
  const { currentCart,AddToCart } = React.useContext(CartContext) as CartContextType;  
  return (
    <BodyContainer>
      <div className="Container">
        <Header currentCart = { currentCart } AddToCart = { AddToCart } />
        <main>
              <MainPage AddToCart={ AddToCart } />
        </main>
      </div>
    </BodyContainer>
  )
}

export default Home
