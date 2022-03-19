import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToursService } from 'src/app/services/fetchTours/tours.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  adminData:any;
  constructor(private adminService:ToursService, private router:Router) {
    this.adminService.getAdminDetail().subscribe((data)=>{
      this.adminData = data;
    });
  }

  ngOnInit(): void {
  }

  nullValue:any;
  adminLogin(data:any){
    if(data.username === this.adminData.username){
      if(data.password === this.adminData.password){
        this.router.navigate(['/admin/YzxtyD4SUw9g64U9TKSVtUvLnFKLjDem6AftGnMh']);
        window.localStorage.setItem('adminToken', `YzxtyD4SUw9g64U9TKSVtUvLnFKLjDem6AftGnMh${this.adminData.token}`);
      }else{
        this.nullValueAll();
        console.log('password')
        this.router.navigate(['/admin']);
      }
    }else{
      this.nullValueAll();
      console.log('username')
      this.router.navigate(['/admin'])
    }
  }
  nullValueAll(){
    this.nullValue=null;
  }
}
