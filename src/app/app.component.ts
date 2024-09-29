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


}
