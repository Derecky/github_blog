import { CartProduct } from "../../models/Cart"
import { City } from "../../models/City"
import { Product } from "../../models/Product"

export const MOCK_CITIES: City[] = [
    {id: 0, name: 'Maceió', province: 'AL'},
    {id: 1, name: 'São Paulo', province: 'SP'},
    {id: 2, name: 'Trombudo Central', province: 'SC'}
]

export const MOCK_ALLPRODUCTS: Product[] =[
    {
        name: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        price: 9.90,
        img: '/png/Image0.png',
        id: 0,
        tags: ['TRADICIONAL'],
    },
    {
        name: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
        price: 9.90,
        img: '/png/Image1.png',
        id: 1,
        tags: ['TRADICIONAL'],
    },
    {
        name: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa',
        price: 9.90,
        img: '/png/Image2.png',
        id: 2,
        tags: ['TRADICIONAL'],
    },
    {
        name: 'Expresso Gelado',
        description: 'Bebida preparada com café expresso e cubos de gelo',
        price: 9.90,
        img: '/png/Image3.png',
        id: 3,
        tags: ['TRADICIONAL', 'GELADO'],
    },
    {
        name: 'Café com Leite',
        description: 'Meio a meio do expresso tradicional com leite vaporizado',
        price: 9.90,
        img: '/png/Image4.png',
        id: 4,
        tags: ['TRADICIONAL', 'COM LEITE'],
    },
    {
        name: 'Latte',
        description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        price: 9.90,
        img: '/png/Image5.png',
        id: 5,
        tags: ['TRADICIONAL', 'COM LEITE'],
    },
    {
        name: 'Capuccino',
        description: 'Bebida com canela feita de doses iguais de café com leite e espuma',
        price: 9.90,
        img: '/png/Image6.png',
        id: 6,
        tags: ['TRADICIONAL', 'COM LEITE'],
    },
    {
        name: 'Macchiato',
        description: 'Café expresso misturado com um pouco de leite quente e espuma',
        price: 9.90,
        img: '/png/Image7.png',
        id: 7,
        tags: ['TRADICIONAL', 'COM LEITE'],
    },
    {
        name: 'Mocaccino',
        description: 'Café expresso com calda de chocolate, pouco leite e espuma',
        price: 9.90,
        img: '/png/Image8.png',
        id: 8,
        tags: ['TRADICIONAL', 'COM LEITE'],
    },
    {
        name: 'Chocolate quente',
        description: 'Bebida feita com chocolate dissolvido no leite quente e café',
        price: 9.90,
        img: '/png/Image9.png',
        id: 9,
        tags: ['TRADICIONAL', 'COM LEITE'],
    },
    {
        name: 'Cubano',
        description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
        price: 9.90,
        img: '/png/Image10.png',
        id: 10,
        tags: ['TRADICIONAL', 'ALCOÓLICO', 'GELADO'],
    },
    {
        name: 'Havaiano',
        description: 'Bebida adocicada preparada com café e leite de coco',
        price: 9.90,
        img: '/png/Image11.png',
        id: 11,
        tags: ['ESPECIAL'],
    },
    {
        name: 'Árabe',
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        price: 9.90,
        img: '/png/Image12.png',
        id: 12,
        tags: ['ESPECIAL'],
    },
    {
        name: 'Irlandês',
        description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        price: 9.90,
        img: '/png/Image13.png',
        id: 13,
        tags: ['ESPECIAL', 'ALCOÓLICO'],
    }
]

export const MOCK_CART: CartProduct[] =[
    {
        product: MOCK_ALLPRODUCTS[2],
        quantity: 5,
    },
    {
        product: MOCK_ALLPRODUCTS[1],
        quantity: 6,
    },
    {
        product: MOCK_ALLPRODUCTS[4],
        quantity: 3,
    },

]

export const deliveryPrice: number = 3.50;
