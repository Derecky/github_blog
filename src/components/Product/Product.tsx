import { Product } from "../../models/Product"

export function Product ({ name, description, price, quantity, img, id }: Product, key:number) {
    return <div key={ id }>{ name }</div>
}