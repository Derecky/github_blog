import type { NextPage } from 'next'
import React, { useState } from 'react'
import { Header } from '../components/Header'
import { MOCK_ALLPRODUCTS, MOCK_CART} from '../components/Header/Mock'
import { MainPage } from '../components/MainPage'
import { CartProduct } from '../models/Cart'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [currentCart, setCurrentCart] = useState(MOCK_CART as CartProduct[]);
  function AddToCart (productId: number, addedQuantity: number){
    let temp:boolean;
    temp=true;
    const newCart = currentCart.map(
      (productCart)=>{
        if (productId==productCart.product.id){
          productCart.quantity+=addedQuantity;
          temp=false;
        }
        return productCart;
      }
    );
    if (temp) {      
      newCart.push({product: MOCK_ALLPRODUCTS[productId], quantity: addedQuantity});
    }
    setCurrentCart(newCart);
  }

  //     
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <Header currentCart = { currentCart } />
        <main className={styles.main}>
              <MainPage AddToCart={ AddToCart } />
        </main>
      </div>
    </div>
  )
}

export default Home
