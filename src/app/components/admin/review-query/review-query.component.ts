import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingBarService } from '@ngx-loading-bar/core';
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

  newQuery:any;
  repliedQuery:any;
  convertedQuery:any;
  closedQuery:any;
  constructor(private queryService:ToursService, private location:Location, private router:Router, private loadingBar:LoadingBarService) {
    this.queryService.getNewQuery().subscribe((data)=>{
      this.newQuery = data;
    })
    this.adminCheck();
    this.queryService.getRepliedQuery().subscribe((data)=>{
      this.repliedQuery = data;
    })
    this.queryService.getConvertedQuery().subscribe((data)=>{
      this.convertedQuery = data;
    })
    this.queryService.getClosedQuery().subscribe((data)=>{
      this.closedQuery = data;
    })
  }

  ngOnInit(): void {
  }

  updateQuery(data:any){
    this.loadingBar.start();
    if(data.status !== ''){
      this.queryService.updateQueryStatus(data).then(()=>{
        this.loadingBar.stop();
      });
    }else{
      this.loadingBar.stop();
    }
  }

}
