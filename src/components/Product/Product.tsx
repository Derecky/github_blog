import { Product } from "../../models/Product"
import { AddCartButton } from "./AddCartButton";
import { IconButton } from "../IconButton";
import { Minus, Plus } from "phosphor-react";
import { ProductMinimalContainer, ProductCardContainer } from "./styles";

interface ProductProps {
    product: Product;
    quantity?: number;
    version: 'minimal' | 'big';
    AddToCart : (productId: number, addedQuantity: number, newQuantity?:number)=>void;
}

export function Product ({product, quantity=0, version, AddToCart}: ProductProps) {
    const { name, description, price, img, id } = product;

    if (version=="big") {
        return (<ProductCardContainer> 
                        <img src={ img }/>
                        <div className="tags">
                            {product.tags.map((tag) => (<span key={ id+tag }>{ tag }</span>))}
                        </div><br/>                
                        <h2>{ name }</h2>
                        <div className="description">{ description }</div>
                        <div className="PriceAndAddCartButton">
                            <span className="price">R$<span>{ price.toFixed(2).toString().replace(".",",") }</span></span>
                            { AddCartButton(product, AddToCart) }
                        </div>
                </ProductCardContainer>)
    } 
    else {
        return (
            <ProductMinimalContainer>
                    <img className="MinimalProductImg" src={ img }/>
                    <div className="MinimalMain">
                        <h2>{ name }</h2>
                        <div className="MinimalButtons">
                            <div className='MinimalMinusPlusButton'>
                                <Minus size={11} 
                                    weight="fill" 
                                    onClick={()=> {AddToCart(product.id,-1);}} 
                                />
                                <input className='quantity' type="number" value={ quantity } onChange={(e)=>{AddToCart(product.id,0,Number(e.target.value));}} />
                                <Plus size={11} 
                                    weight="fill" 
                                    onClick={()=> {AddToCart(product.id,+1);}}
                                />
                            </div>                   
                            <IconButton
                                color='baseText' colorHover='baseSubtitle'
                                colorIcon='purple' colorIconHover='purple'
                                text='REMOVER'
                                background='baseButton' 
                                backgroundHover='baseHover' 
                                icon="Trash"
                                size={ 15 } 
                                clickFunction={
                                    ()=> {AddToCart(product.id, 0, 0);}
                                } 
                            />                        
                        </div>    
                    </div>
                    <div className="MinimalPrice">R${ (price*quantity).toFixed(2).toString().replace(".",",") }
                    </div>
            </ProductMinimalContainer>
        )
    }
}

