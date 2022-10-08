import Link from "next/link";
import {MapPin,ShoppingCart, CaretDown, CaretUp} from "phosphor-react";
import { mockedCurrentCity, MOCK_LOCATIONS } from "./Mock";
import { DivHeaderContainer, HoverCardCart } from './styles';
import { CartProduct } from "../../models/Cart";
import { useRouter } from "next/router";
import { Cart } from "../Cart";
import { HoverCard, HoverCardContent, HoverCardTrigger} from "../RadixHoverCard";
import { Select, SelectContent, SelectGroup, SelectItem, SelectItemText, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue, SelectViewport } from "../RadixSelect";
import React from "react";

interface HeaderProps {
    currentCart: CartProduct[];
    AddToCart : (productId: number, addedQuantity: number, newQuantity?:number)=>void;
}

export function Header ({currentCart, AddToCart}: HeaderProps) {
    const qtd_carrinho = (currentCart.reduce((partialSum,currentItem) => partialSum + currentItem.quantity, 0));
    const url = "/"; 
    const url_cart = "/checkout"; 

    const router = useRouter();

    return (
        <DivHeaderContainer>
            <Link href={ url }>
                <a className='logo'></a>
            </Link>
            <div className='div_header_direita' >
                <Select defaultValue={ mockedCurrentCity }>
                    <SelectTrigger><MapPin size={18} weight="fill" />
                        <SelectValue placeholder="Escolha a cidade" />
                    </SelectTrigger>
                    <SelectContent>
                    <SelectScrollUpButton>
                        <CaretUp size={17} />
                    </SelectScrollUpButton>
                    <SelectViewport>
                        {MOCK_LOCATIONS.map((state) => (
                            <React.Fragment key={ "fragment"+state.id }>
                                <SelectGroup key={ state.id }>
                                    <SelectLabel key={ "label"+state.id }>{ state.name }</SelectLabel>
                                        { state.cities.map((city) => (
                                            <SelectItem key={ state.id+city } value={ city }>
                                                <SelectItemText  key={ "text"+state.id+city }>{ city }, { state.code }</SelectItemText>
                                            </SelectItem>
                                        )) }
                                </SelectGroup>
                                <SelectSeparator key={ "separator"+state.id } />    
                            </React.Fragment>
                        )) }
                    </SelectViewport>
                    <SelectScrollDownButton>
                        <CaretDown size={17} />
                    </SelectScrollDownButton>
                    </SelectContent>
                </Select>

                <HoverCard>
                    <HoverCardTrigger asChild>
                    <HoverCardCart 
                    onClick={ () => {router.push(url_cart);} } 
                    disabled={ qtd_carrinho==0 }
                    >
                        <ShoppingCart size={ 19 } weight="fill" />
                        { qtd_carrinho!=0?<div className='CartDivQtd'>{ qtd_carrinho }</div>:"" }
                    </HoverCardCart>
                    </HoverCardTrigger>
                    <HoverCardContent sideOffset={5}>
                    {((router.asPath=="/")&&
                      (currentCart.length!=0))?
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