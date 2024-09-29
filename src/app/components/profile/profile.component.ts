import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserInterface } from 'src/app/models/user.interface';
import { ApiServices } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(private apiService:ApiServices , private router:Router , private authService:AuthService){}
  userDetails!:UserInterface
  ngOnInit(){
    this.apiService.getUser().subscribe(user=>this.userDetails = user)
  }

  // logout method
  logout(){
    this.authService.logout()
    this.router.navigateByUrl('/home')
  }
}
