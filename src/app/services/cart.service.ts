import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class CartService{
    cartCount = new BehaviorSubject<number>(0);
    cartCount$ = this.cartCount.asObservable();
    addToCart(productId: number): void {
        this.cartCount.next(this.cartCount.value + 1);
    }
    removeFromCart():void{
        this.cartCount.next(this.cartCount.value - 1)
    }

}