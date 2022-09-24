import Link from "next/link";
import {MapPin,ShoppingCart} from "phosphor-react";
import { City } from "../../models/City";
import { Product } from "../Product";
import { MOCK_CITIES } from "./Mock";
import { DivHeaderContainer } from './styles';
import { CartProduct } from "../../models/Cart";
import { useRouter } from "next/router";
import { Cart } from "../Cart";

interface HeaderProps {
    currentCart: CartProduct[];
    AddToCart : (productId: number, addedQuantity: number, newQuantity?:number)=>void;
}

export function Header ({currentCart, AddToCart}: HeaderProps) {
    const city_index = 2;
    const qtd_carrinho = (currentCart.reduce((partialSum,currentItem) => partialSum + currentItem.quantity, 0));
    const url = "/"; 
    const url_cart = "/checkout"; 
    //cart={ currentCart } 


    function formatCity(city: City) {
        return `${ city.name.slice(0,20) }, ${ city.province }`;
    }
    const city_UF = formatCity(MOCK_CITIES[city_index]);
    const router = useRouter();

    return (
        <DivHeaderContainer>
            <Link href={ url }>
                <a className='logo'></a>
            </Link>

            <div className='div_header_direita'>
                <div className='div_local'>
                    <MapPin size={19.25} weight="fill" /> 
                    <select defaultValue={ city_index }>
                        <option value={ city_index }>
                            { city_UF }
                        </option>
                        {MOCK_CITIES.map((city) => (
                            city_index != city.id 
                            ? <option key={ city.id }  value={ city.id }>{ formatCity(city) }</option> 
                            : null
                        ))}
                    </select>
                </div>
                    <div 
                        className='button_carrinho' 
                        onClick={ () => {return false;} }
                    >
                        <ShoppingCart size={ 19.25 } weight="fill" onClick={ () => {router.push(url_cart);} } />
                        <div className='CartDivQtd'>{ qtd_carrinho }</div>
                        <Cart 
                            AddToCart={ AddToCart } 
                            currentCart={ currentCart }
                        />
                    </div>
            </div>
        </DivHeaderContainer>
    )
} 