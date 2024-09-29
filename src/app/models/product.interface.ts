export interface Product{
    category:string
    id:number
    description:string
    image:string
    price:number
    rating:Rating
    title:string
}

export interface Rating{
    rate:number
    count:number
}