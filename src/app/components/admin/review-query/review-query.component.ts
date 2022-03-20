import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToursService } from 'src/app/services/fetchTours/tours.service';
import { AdminLoginComponent } from '../admin-login/admin-login.component';

@Component({
  selector: 'app-review-query',
  templateUrl: './review-query.component.html',
  styleUrls: ['./review-query.component.css']
})
export class ReviewQueryComponent implements OnInit {

  adminCheck(){
    const url = this.location.path().split('/')[2];
    if(localStorage.getItem('adminToken')){
      if(localStorage.getItem('adminToken') !== `${url}Ql21YZQkW4Oz51Vct2SQ`){
        localStorage.removeItem('adminToken');
        this.router.navigate(['/'])
      }
    }else{
      localStorage.removeItem('adminToken');
      this.router.navigate(['/'])
    }
  }

  queries:any;
  constructor(private queryService:ToursService, private location:Location, private router:Router) {
    this.queryService.getAdminHomeQuery().subscribe((data)=>{
      this.queries = data;
      console.log(data)
    })
    this.adminCheck();
  }

  ngOnInit(): void {
  }

  updateQuery(data:any){
    this.queryService.updateQueryStatus(data.status, data.id);
  }

}
