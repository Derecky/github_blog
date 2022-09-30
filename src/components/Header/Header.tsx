import Link from "next/link";
import {MapPin,ShoppingCart} from "phosphor-react";
import { City } from "../../models/City";
import { MOCK_CITIES } from "./Mock";
import { DivHeaderContainer, HoverCardCart } from './styles';
import { CartProduct } from "../../models/Cart";
import { useRouter } from "next/router";
import { Cart } from "../Cart";
import { HoverCard, HoverCardContent, HoverCardTrigger} from "../RadixHoverCard";

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
                <HoverCard>
                    <HoverCardTrigger asChild>
                    <HoverCardCart onClick={ () => {router.push(url_cart);} }>
                        <ShoppingCart size={ 19 } weight="fill" />
                        { qtd_carrinho!=0?<div className='CartDivQtd'>{ qtd_carrinho }</div>:"" }
                    </HoverCardCart>
                    </HoverCardTrigger>
                    <HoverCardContent sideOffset={5}>
                    {router.asPath=="/"?
                        <Cart 
                                AddToCart={ AddToCart } 
                                currentCart={ currentCart }
                                isInHeader={ true }
                            />
                    :""
                    }
                    </HoverCardContent>
                </HoverCard>
            </div>
        </DivHeaderContainer>
    )
} 