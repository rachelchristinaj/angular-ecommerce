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

  
}
