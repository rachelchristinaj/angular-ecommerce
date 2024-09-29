<<<<<<< HEAD
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';   
import { FormsModule } from '@angular/forms';
import { bootstrapApplication } from '@angular/platform-browser';
import { LoginSignupComponent } from './components/login-signup/login-signup.component';
import { LayoutComponent } from './components/layout/layout.component';
import {  ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginSignupComponent },
  {
    path: 'layout', component: LayoutComponent,
    children: [
      { path: 'products',
        component: ProductsComponent
      }
    ]
  }
];


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule ,
    RouterOutlet,
    HttpClientModule,
    FormsModule,

  ],
  templateUrl: './app.component.html',
  template: `<router-outlet></router-outlet>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ShopinKart';

  
=======
import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter ,map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ShopEase';
  isScrolled:boolean = false
  hideHeaderFooter:boolean=false
  @HostListener('window:scroll')
  onScroll(){
      // check the user scrolled
      this.isScrolled = window.scrollY > 0
  }
  constructor(private router:Router,private activateRoute:ActivatedRoute){}
  ngOnInit(){
      // checking the initial scroll 
      this.isScrolled = window.scrollY > 0
    // checking the route is login to hide the footer and the header
    this.router.events.pipe(
      filter(event=>event instanceof NavigationEnd),
      map(()=>this.activateRoute),
      map(route=>{
        while (route.firstChild)route = route.firstChild
        return route
      }),
      map(route=>route.snapshot.data)
    ).subscribe(data => {
      this.hideHeaderFooter = data['hideHeaderFooter'] || false
    })

  }


>>>>>>> e10fa36a663cea90344f4716f75505fa696f8f67
}
