import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constant/constant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduccttService {

  private apiUrl = 'https://freeapi.miniprojectideas.com/api/BigBasket';
  constructor(private http: HttpClient) { }
  
 getCategory(){
  return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_ALL_CATEGORY)
 }
 saveProducts(obj:any){
  return this.http.post(Constant.API_END_POINT + Constant.METHODS.GET_ALL_PRODUCT, obj);
 }
 getProducts(){
  return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_ALL_PRODUCT);
 }
}

 