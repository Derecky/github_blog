import {Plus,Minus} from "phosphor-react";
import {useState } from 'react';
import { AddCartButtonContainer, MinusPlusButtonContainer } from "./styles";
import { defaultTheme } from "../../styles/themes/theme";
import { IconButton } from "../IconButton";
import { Product } from "../../models/Product";

export function AddCartButton (product: Product, AddToCart : (productId: number, addedQuantity: number)=>void) {
    const [count, setCount] = useState(1);
    function handleAdd () {
        return setCount( count + 1 );
    }

    function handleSub () {
        return setCount((count>2)?(count - 1):1);
    }
    

    return (
        <AddCartButtonContainer>
            <MinusPlusButtonContainer
                colorIcons = { defaultTheme.purple }
                background = { defaultTheme.baseButton }
                colorQuantity = { defaultTheme.baseTitle }
            >
                <Minus size={11} weight="fill" onClick={ handleSub } />
                <div>
                    { count }
                </div>
                <Plus size={11} weight="fill" onClick={ handleAdd } />
            </MinusPlusButtonContainer>

            <IconButton 
                color='white' 
                background='purpleDark' 
                backgroundHover='purple' 
                icon="ShoppingCart" 
                size={ 20 } 
                clickFunction={
                    ()=> {
                        AddToCart(product.id,count); 
                        setCount(1);
                    }
                } 
            />
            
        </AddCartButtonContainer>
    );
}
