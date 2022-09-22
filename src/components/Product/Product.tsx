import { Product } from "../../models/Product"
import { ProductCardContainer,ProductMinimalContainer } from "./styles";
import { defaultTheme } from "../../styles/themes/theme";
import { AddCartButton } from "./AddCartButton";

interface ProductProps {
    product: Product;
    quantity?: number;
    version: 'minimal' | 'big';
    AddToCart : (productId: number, addedQuantity: number)=>void;
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
    else {return <ProductMinimalContainer>{ name }({ quantity })</ProductMinimalContainer>}
}

