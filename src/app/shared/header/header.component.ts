import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServices } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isLoggedIn:boolean = false
  searchTerm :string=''
  cartCount!:number 
  constructor(
    private searchService:SearchService ,
    private router:Router ,
    private apiService:ApiServices ,
    private cartService:CartService,
    private authService:AuthService
  ){}
  // updating the search input 
  onSearchInput(){
    this.searchService.updateSearchTerm(this.searchTerm)
    this.router.navigateByUrl('/home')
  }
  // user logging in 
  login(){
    this.authService.login()
    this.router.navigateByUrl('auth/login')
  }

  ngOnInit(){
    
    // Load initial cart count
    this.apiService.getCart().subscribe();
    
    const token = localStorage.getItem('token')
    if(token){
      this.isLoggedIn = true
      this.cartService.cartCount$.subscribe(count => {
        this.cartCount = count;
      });
    }
    // state changing 
    this.authService.loggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });
  }
  // redirecting to the profile page
  goToProfile(){
    this.router.navigateByUrl('/users/1')
  }
  //going to the cart page
  gotToCart(){
    const token = localStorage.getItem('token')
    if(!token){
      this.router.navigateByUrl('/auth/login')
    }else{
      this.router.navigateByUrl('/carts/5')
    }
  }
}
