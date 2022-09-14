import Link from "next/link";
import {MapPin,ShoppingCart} from "phosphor-react";
import { City } from "../../models/City";
import { Product } from "../Product";
import { MOCK_CART, MOCK_CITIES } from "./Mock";
import style from './Header.module.css';


export function Header () {
    const city_index = 2;
    const qtd_carrinho = (MOCK_CART.reduce((partialSum,currentItem) => partialSum + currentItem.quantity, 0));
    const url = "/"; 
    const url_cart = "/"; 

    function formatCity(city: City) {
        return `${ city.name.slice(0,20) }, ${ city.province }`;
    }
    const city_UF = formatCity(MOCK_CITIES[city_index]);
    
    return (
        <div className={ style.div_header }>
            <Link href={ url }>
                <a className={ style.logo }></a>
            </Link>

            <div className={ style.div_header_direita }>
                <div className={ style.div_local }>
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
                <Link href={ url_cart }>
                    <a className={ style.button_carrinho }>
                        <ShoppingCart size={ 19.25 } weight="fill" />
                        <div className={ style.div_qtd_carrinho }>{ qtd_carrinho }</div>
                            <div className={ style.div_carrinho }>
                                {MOCK_CART.map((product) => (
                                    <Product 
                                        key = { product.id }  
                                        product = { product } 
                                    />
                                ))}
                            </div>
                    </a>
                </Link> 
            </div>
        </div>
    )
} 