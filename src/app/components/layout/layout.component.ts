import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';



@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  loggedUser : any;

  isNavbarCollapsed = true;
  constructor(private _router: Router)
  {
    const localUser = localStorage.getItem('loggedUser');
    if(localUser != null){
      this.loggedUser= JSON.parse(localUser);
    }
  }

  onLogOut()
  {
    localStorage.removeItem('loggedUser');
    this._router.navigateByUrl('/login');
  }

}
