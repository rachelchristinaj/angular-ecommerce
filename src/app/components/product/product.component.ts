import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.interface';
import { ApiServices } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productDetails!: Product;
  quantity:number = 1;
  cartBtnTxt:string = 'Add to cart'
  constructor(private apiService: ApiServices, private route: ActivatedRoute , private router:Router , private cartService:CartService) {}

  ngOnInit() {
    // getting the product details
    const productId = this.route.snapshot.params['id'];
    this.apiService.getProductById(productId).subscribe(product => {
      this.productDetails = product;
    });
  }
  // decrement the quantity
  decrement(){
    if(this.quantity > 1){
      this.quantity --
    }
  }
  // increment the quantity
  increment(){
    this.quantity++
  }
  // adding the product into the cart
  addToCart(productId:number):void{
    if(this.cartBtnTxt == 'Add to cart' ){
      const token = localStorage.getItem('token')
      if(!token){
      this.router.navigateByUrl('/auth/login')
      }
      this.cartService.addToCart(productId);
      this.cartBtnTxt = 'Go to cart'
    }else{
      this.router.navigateByUrl('/carts/5')
    }
  }

}
