import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToursService } from 'src/app/services/fetchTours/tours.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  adminData:any;
  constructor(private router:Router, private adminService:ToursService) {
    const localDataToken = window.localStorage.getItem('adminToken')
    this.adminService.getAdminDetail().subscribe((data)=>{
      this.adminData = data;
    })
    setTimeout(() => {
      const url = this.router.url.split('/');
      if(localDataToken !== `${url[2]}${this.adminData.token}`){
        this.router.navigate(['/admin'])
      }
    }, 1000);
  }
  
  ngOnInit(): void {
  }
  
  logout(){
    window.localStorage.removeItem('adminToken');
    this.router.navigate(['/']);
    window.location.reload();
  }
}
