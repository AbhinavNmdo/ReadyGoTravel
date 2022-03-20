import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Event, Router } from '@angular/router';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {

  hidden:boolean = false;
  burger:boolean = false;
  activeNav(){
    this.burger = !this.burger;
  }
  constructor(private location:Location, private router:Router) {
    location.onUrlChange((url)=>{
      if(url.startsWith('/admin/YzxtyD4SUw9g64U9TKSVtUvLnFKLjDem6AftGnMh')){
        this.hidden = false
      }else{
        this.hidden = true
      }
    })
  }

  ngOnInit(): void {
  }
  logout(){
    window.localStorage.removeItem('adminToken');
    this.router.navigate(['/']);
  }
}
