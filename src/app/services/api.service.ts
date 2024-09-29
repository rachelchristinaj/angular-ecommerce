import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Product } from "../models/product.interface";
import { LoginInterface } from "../models/login.interface";
import { CartService } from "./cart.service";

@Injectable({
    providedIn: 'root'
})
export class ApiServices {
    // private cartCount = new BehaviorSubject<number>(0);
    // cartCount$ = this.cartCount.asObservable();

    constructor(private http: HttpClient , private cartService:CartService) { }

    api = environment.url;

    getCategories(): Observable<string[]> {
        const url = `${this.api}/products/categories`;
        return this.http.get<string[]>(url);
    }

    getProductsByCategories(category: string): Observable<Product[]> {
        const url = `${this.api}/products/category/${category}`;
        return this.http.get<Product[]>(url);
    }

    getAllProducts(): Observable<Product[]> {
        const url = `${this.api}/products`;
        return this.http.get<Product[]>(url);
    }

    getProductById(id: number): Observable<Product> {
        const url = `${this.api}/products/${id}`;
        return this.http.get<Product>(url);
    }

    login(loginData: LoginInterface): Observable<string> {
        const url = `${this.api}/auth/login`;
        return this.http.post<any>(url, loginData).pipe(
            map((response) => {
                const token = response.token;
                localStorage.setItem('token', token);
                return token;
            })
        );
    }

    getCart(): Observable<any> {
        const id = 5;
        const url = `${this.api}/carts/${id}`;
        return this.http.get(url).pipe(
            map((cart: any) => {
                this.cartService.cartCount.next(cart.products.length);
                return cart;
            })
        );
    }
    // getting the userDetails
    getUser():Observable<any>{
        const id =1
        const url = `${this.api}/users/${id}`;
        return this.http.get(url)
    }

}
