import { useRouter } from "next/router";
import { CartProduct } from "../../models/Cart";
import { deliveryPrice } from "../Header/Mock";
import { Product } from "../Product";
import { CartContainer } from "./styles";


interface CartProps {
    currentCart: CartProduct[];
    AddToCart : (productId: number, addedQuantity: number, newQuantity?:number)=>void;
}

export function Cart ({currentCart, AddToCart}: CartProps) {
    const totalPrice = (currentCart.reduce((partialPrice,currentItem) => partialPrice + (currentItem.quantity*currentItem.product.price), 0));
    const url_success="/";
    const router = useRouter();

    return (
        <CartContainer>
            <div className="CartDiv">
                {currentCart.map((cart) => (
                    cart.quantity!=0?
                    <Product 
                        key = { cart.product.id }  
                        product = { cart.product } 
                        version = 'minimal'
                        quantity = { cart.quantity }
                        AddToCart={ AddToCart }
                    />:
                    <></>)
                )}
                <div className="CartTotal">
                    <div className="CartTotalRow">
                        <span>Total de itens</span>
                        R${ totalPrice.toFixed(2).toString().replace(".",",") }
                    </div>
                    <div className="CartTotalRow">
                        <span>Entrega</span>
                        R${ deliveryPrice.toFixed(2).toString().replace(".",",") }
                    </div>
                    <div className="CartTotalRow Total">
                        <span>Total</span>
                        R$ { (totalPrice+deliveryPrice).toFixed(2).toString().replace(".",",") }
                    </div>
                    <a onClick={ () => {router.push(url_success);} } className="CartTotalButton">CONFIRMAR PEDIDO</a>
                </div>    
            </div> 
        </CartContainer>
    )
} 