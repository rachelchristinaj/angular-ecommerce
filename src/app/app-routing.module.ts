import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'auth/login',component:LoginComponent,data:{hideHeaderFooter:true}},
  {path:'products/:id',component:ProductComponent},
  {path:'users/:id',component:ProfileComponent},
  {path:'carts/:id',component:CartComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
