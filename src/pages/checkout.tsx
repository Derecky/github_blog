import type { NextPage } from 'next'
import React, { useState } from 'react'
import { Cart } from '../components/Cart'
import { Header } from '../components/Header'
import { MOCK_ALLPRODUCTS, MOCK_CART} from '../components/Header/Mock'
import { CartProduct } from '../models/Cart'
import { BodyContainer } from '../styles/pages/homeStyles'

const Home: NextPage = () => {
  const [currentCart, setCurrentCart] = useState(MOCK_CART as CartProduct[]);
  function AddToCart (productId: number, addedQuantity: number, newQuantity = -1){
    let ProductIsNotInCart:boolean;    
    ProductIsNotInCart=true; 
    
    const newQuantitiesCart = currentCart.map(
      (productCart)=>{
        if (productId==productCart.product.id){
          if (newQuantity<0) {productCart.quantity+=addedQuantity;}
          else {productCart.quantity=newQuantity;}
          ProductIsNotInCart=false;
        }
        return productCart;
      });
    const CartWithoutZeroedProducts =  newQuantitiesCart.filter((product) => {return (product.quantity>0)});
    
    if (ProductIsNotInCart) {      
      CartWithoutZeroedProducts.push({product: MOCK_ALLPRODUCTS[productId], quantity: addedQuantity});
    }
    setCurrentCart(CartWithoutZeroedProducts);
  }

  //     
  return (
    <BodyContainer>
      <main>
        <div className="Container">
          <Header currentCart = { currentCart } AddToCart = { AddToCart } />
          <div className='bodyCheckout'>
            <div className='cartLeft'>[ Em construção ]</div>              
            <div className="cartDiv">
              <Cart 
                  AddToCart = { AddToCart } 
                  currentCart = { currentCart }
                  isInHeader = { false }
              />
            </div>
          </div>    
        </div>
      </main>
    </BodyContainer>
  )
}

export default Home
