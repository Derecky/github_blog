import * as React from 'react';
import { MOCK_ALLPRODUCTS, MOCK_CART } from '../components/Header/Mock';
import { CartProduct } from '../models/Cart';

export type CartContextType = {
    currentCart: CartProduct[];
    AddToCart: (productId: number, addedQuantity: number, newQuantity?:number) => void;
}

export const CartContext = React.createContext<CartContextType | null>(null);

export const CartProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [currentCart, setCurrentCart] = React.useState<CartProduct[]>(MOCK_CART);

  const AddToCart = (productId: number, addedQuantity: number, newQuantity = -1) =>{
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

  return (
    <CartContext.Provider value={{ currentCart, AddToCart }}>
      {children}
    </CartContext.Provider>
  );
};
