import { Product } from "../../models/Product"

interface ProductProps {
    product: Product
}


export function Product ({product}: ProductProps) {
    const { name } = product;
    return <div>{ name }</div>
}

