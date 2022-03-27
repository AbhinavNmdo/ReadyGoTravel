import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToursService } from 'src/app/services/fetchTours/tours.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  @Output() admin = new EventEmitter();
  adminData:any;
  constructor(private adminService:ToursService, private router:Router) {
    this.adminService.getAdminDetail().subscribe((data)=>{
      this.adminData = data[0];
      this.admin.emit(data[0])
      console.log(data[0])
    });
  }

  ngOnInit(): void {
  }

  
  autoLogout(loginTime:Date){
    console.log(loginTime.getMinutes())
    // setTimeout(() => {
    //   window.localStorage.removeItem('adminToken');
    //   this.router.navigate(['/']);
    // }, date+5000);
  }

  nullValue:any;
  adminLogin(data:any){
    if(data.username === this.adminData.username){
      if(data.password === this.adminData.password){
        this.router.navigate(['/admin/YzxtyD4SUw9g64U9TKSVtUvLnFKLjDem6AftGnMh/reviewcontrol']);
        window.localStorage.setItem('adminToken', `YzxtyD4SUw9g64U9TKSVtUvLnFKLjDem6AftGnMh${this.adminData.token}`);
        const loginTime = new Date();
        this.autoLogout(loginTime);
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
