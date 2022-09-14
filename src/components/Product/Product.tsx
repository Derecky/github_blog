import { Product } from "../../models/Product"

interface ProductProps {
    product: Product
}

export function Product (product: ProductProps, key:number) {
    const { name, description, price, quantity, img, id } = product.product;
    return <div>{ name }</div>
}

