import { Routes } from '@angular/router';
import { LoginSignupComponent } from './components/login-signup/login-signup.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ProductsComponent } from './components/products/products.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "login",
        pathMatch: 'full'
    },
    {
        path: "login",
        component: LoginSignupComponent
    },

    {
        path: 'layout',
        component: LayoutComponent,
        children: [
            {
                path: 'products',
                component: ProductsComponent
            }
        ]
    }
];
