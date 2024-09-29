import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginInterface } from 'src/app/models/login.interface';
import { ApiServices } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private fb:FormBuilder , private apiService:ApiServices ,private router:Router){}
  errorMsg:string=''
  login = this.fb.group({
    username:['',Validators.required],
    password:['',Validators.required]
  })

  onSubmit(){
    const loginData = this.login.value as LoginInterface
    this.apiService.login(loginData).subscribe(
      (response)=>{
        this.router.navigateByUrl('/home')
      },
      (err)=>{
        this.errorMsg = err.error
                setTimeout(() => {
                    this.errorMsg=''
                }, 3000);
        
      }
    )
  }
}
