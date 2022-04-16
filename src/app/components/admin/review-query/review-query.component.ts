import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { ToursService } from 'src/app/services/fetchTours/tours.service';
import { AdminLoginComponent } from '../admin-login/admin-login.component';

interface TourDetail {
  name: string,
  duration: string,
  mode: string,
  pic: string,
  desc: string,
  days: Array<string>,
  inclusions: Array<string>,
  places: Array<string>,
  price: string
}
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

  newQuery:any = [];
  repliedQuery:any = [];
  convertedQuery:any = [];
  closedQuery:any = [];

  newQueryExist:boolean = false;
  repliedQueryExist:boolean = false;
  convertedQueryExist:boolean = false;
  closedQueryExist:boolean = false;

  constructor(private queryService:ToursService, private location:Location, private router:Router, private loadingBar:LoadingBarService) {
    this.queryService.getNewQuery().subscribe((data)=>{
      this.newQuery = data;
      if(data.length > 0){
        this.newQueryExist = true;
      }
    })
    this.adminCheck();
    this.queryService.getRepliedQuery().subscribe((data)=>{
      this.repliedQuery = data;
      if(data.length > 0){
        this.repliedQueryExist = true;
      }
    })
    this.queryService.getConvertedQuery().subscribe((data)=>{
      this.convertedQuery = data;
      if(data.length > 0){
        this.convertedQueryExist = true;
      }
    })
    this.queryService.getClosedQuery().subscribe((data)=>{
      this.closedQuery = data;
      if(data.length > 0){
        this.closedQueryExist = true;
      }
    })
    // if(this.newQuery.length > 0){
    //   this.newQueryExist = true;
    // }else if(this.repliedQuery.length > 0){
    //   this.repliedQueryExist = true;
    // }else if(this.convertedQuery.length > 0){
    //   this.convertedQueryExist = true;
    // }else if(this.closedQuery.length > 0){
    //   this.closedQueryExist = true;
    // }
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
