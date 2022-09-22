import { MOCK_ALLPRODUCTS } from "../Header/Mock";
import { Product } from "../Product";
import { MainPageContainer } from "./styles";


interface MainPageProps {
    AddToCart : (productId: number, addedQuantity: number)=>void;
}

export function MainPage ({AddToCart}: MainPageProps) {
    return (
        <MainPageContainer>
            {MOCK_ALLPRODUCTS.map((product) => (
                <Product 
                    key = { product.id }  
                    product = { product } 
                    version = 'big' 
                    AddToCart = { AddToCart }
                />
            ))}
        </MainPageContainer>
    )
} 