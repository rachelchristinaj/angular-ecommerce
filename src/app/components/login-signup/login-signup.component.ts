import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-login-signup',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterOutlet],
  templateUrl: './login-signup.component.html',
  styleUrl: './login-signup.component.css'
})
export class LoginSignupComponent {
  activeForm: 'login' | 'register' =  'login';
  registerObj:regtisterModel = new regtisterModel ();
  loginObj:loginModel = new loginModel ();

  constructor(private _snackbar:MatSnackBar, private _router: Router){}
  toggleForm(form: 'login' | 'register')
  {
    this.activeForm = form;
  }

  registerForm(){
    const localusers = localStorage.getItem('users');
    if(localusers !=null)
      {
      const users = JSON.parse(localusers);
      users.push(this.registerObj);
      localStorage.setItem('users' , JSON.stringify(users));
    }else{
      const users = [];
      users.push(this.registerObj);
      localStorage.setItem('users', JSON.stringify(users))
    }
    this._snackbar.open('user register successful','Close');
  }
loginForm()
{
  const localusers = localStorage.getItem('users');
  if(localusers != null){
    const users = JSON.parse(localusers);
    const isUserExist = users.find((user:regtisterModel)=> user.email == this.loginObj.email && user.password == this.loginObj.password)
    if(isUserExist!= undefined)
    {this._snackbar.open('login successfull','Close');
      localStorage.setItem('loggedUser', JSON.stringify(isUserExist));
      this._router.navigateByUrl('/products');
    }else{
      this._snackbar.open('Email or Password is incorrect!', 'Close')
    }
  }
}
}
export class regtisterModel{
  name: string;
  email: string;
  password: string;
  constructor(){
    this.name = "";
    this.email = "";
    this.password = ""
  }

}
export class loginModel{
  email: string;
  password: string;
  constructor(){
    this.email = "";
    this.password = ""
  }

}
