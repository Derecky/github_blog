import type { NextPage } from 'next'
import React, { useState } from 'react'
import { Cart } from '../components/Cart'
import { Header } from '../components/Header'
import { MOCK_ALLPRODUCTS, MOCK_CART} from '../components/Header/Mock'
import { CartProduct } from '../models/Cart'
import { BodyContainer } from './styles'

const Home: NextPage = () => {
  const [currentCart, setCurrentCart] = useState(MOCK_CART as CartProduct[]);
  function AddToCart (productId: number, addedQuantity: number, newQuantity: number = -1){
    let temp:boolean;    
    temp=true; 
    
    const newCart = currentCart.map(
      (productCart)=>{
        if (productId==productCart.product.id){
          if (newQuantity<0) {productCart.quantity+=addedQuantity;}
          else {productCart.quantity=newQuantity;}
          temp=false;
        }
        return productCart;
      }).filter((product) => {return (product.quantity>0);});
    
    if (temp) {      
      newCart.push({product: MOCK_ALLPRODUCTS[productId], quantity: addedQuantity});
    }
    setCurrentCart(newCart);
  }

  //     
  return (
    <BodyContainer>
      <main>
        <div className="Container">
          <Header currentCart = { currentCart } AddToCart = { AddToCart } />
              (juntar form de endereço com carrinho)
              <div className="cartDiv">
                <Cart 
                    AddToCart={ AddToCart } 
                    currentCart={ currentCart }
                />
              </div>    
        </div>
      </main>
    </BodyContainer>
  )
}

export default Home
