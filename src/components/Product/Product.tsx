import { Product } from "../../models/Product"

export function Product ({ name, description, price, quantity, img }: Product) {
    return <div>{name}</div>
}