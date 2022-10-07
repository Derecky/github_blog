import type { NextPage } from 'next'
import React, { useState } from 'react'
import { Cart } from '../components/Cart'
import { FormCard } from '../components/FormCard'
import { Header } from '../components/Header'
import { MOCK_ALLPRODUCTS, MOCK_CART} from '../components/Header/Mock'
import { PaymentCard } from '../components/PaymentCard'
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
  
  //const [currentClientData, SetClientData] = useState({postalCode:'',street:'',houseNumber:'',complement:'',district:'',city:mockedCurrentCity,stateAbbreviation:mockedCurrentStateCode, paymentType:"credit"} as ClientData);  
  //function ChangeClientData (dataType: string, dataValue: string){
  //  let newClientData =  {...currentClientData };
  //  newClientData[dataType as keyof ClientData] = dataValue;
    
  //  SetClientData(newClientData);
  //}
  const [paymentType, SetPaymentType] = useState("credit" as string); 

  return (
    <BodyContainer>
      <main>
        <div className="Container">
          <Header currentCart = { currentCart } AddToCart = { AddToCart }/>
          <div className='bodyCheckout'>
            <div className='checkoutLeft'>
              <h2 className="ProductGroupTitle">Complete seu pedido</h2>
              <FormCard paymentType={ paymentType } />
              <PaymentCard 
                paymentType = { paymentType } 
                SetPaymentType = { SetPaymentType } />
            </div>              
            <div className="checkoutRight">
              <h2 className="ProductGroupTitle">Cafés Selecionados</h2>
              <div className="cartDiv">
                <Cart 
                    AddToCart = { AddToCart } 
                    currentCart = { currentCart }
                    isInHeader = { false }
                />
              </div>
            </div>
          </div>    
        </div>
      </main>
    </BodyContainer>
  )
}

export default Home
