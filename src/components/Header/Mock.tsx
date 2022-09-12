import { City } from "../../models/City"

export const MOCK_CITIES: City[] = [
    {id: 0, name: 'Maceió', province: 'AL'},
    {id: 1, name: 'São Paulo', province: 'SP'},
    {id: 2, name: 'Trombudo Central', province: 'SC'}
]

export const MOCK_CART =[
    {
        name: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        price: 9.90,
        quantity: 2,
        img: ''
    },
    {
        name: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
        price: 9.90,
        quantity: 1,
        img: ''
    },
    {
        name: 'Árabe',
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        price: 9.90,
        quantity: 3,
        img: ''
    }
]