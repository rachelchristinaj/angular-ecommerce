import { Product } from "./product.interface"

export interface Cart{
    id:number
    userId:number
    date:Date
    products:[{
        productId:number,
        quantity:number
    }]
}



export interface CartProducts extends Product{
    quantity:number
}