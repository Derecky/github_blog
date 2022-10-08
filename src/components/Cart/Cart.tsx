import { CartProduct } from "../../models/Cart";
import { deliveryPrice } from "../Header/Mock";
import { Product } from "../Product";
import { CartContainer } from "./styles";


interface CartProps {
    currentCart: CartProduct[];
    AddToCart : (productId: number, addedQuantity: number, newQuantity?:number)=>void;
    isInHeader: boolean;
}

export function Cart ({currentCart, AddToCart, isInHeader}: CartProps) {
    const totalPrice = (currentCart.reduce((partialPrice,currentItem) => partialPrice + (currentItem.quantity*currentItem.product.price), 0));

    return (
        <CartContainer>
            <div className="CartDiv">
                {currentCart.map((cart) => (
                    cart.quantity!=0?
                    <Product 
                        key = { cart.product.id + 'cart' }  
                        product = { cart.product } 
                        version = 'minimal'
                        quantity = { cart.quantity }
                        AddToCart={ AddToCart }
                    />:"")
                )}
                <div className="CartTotal">
                    <div>
                        <span>Total de itens</span>
                        R${ totalPrice.toFixed(2).toString().replace(".",",") }
                    </div>
                    <div>
                        <span>Entrega</span>
                        R${ deliveryPrice.toFixed(2).toString().replace(".",",") }
                    </div>
                    <div className="Total">
                        <span>Total</span>
                        R$ { (totalPrice+deliveryPrice).toFixed(2).toString().replace(".",",") }
                    </div>
                    { (isInHeader)?
                        ""
                        :<input type="submit" form="formClientData" className="CartTotalButton" value="CONFIRMAR PEDIDO"/> 
                    }
                    
                </div>    
            </div> 
        </CartContainer>
    )
} 