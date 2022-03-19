import { Component, OnInit } from '@angular/core';
import { ToursService } from 'src/app/services/fetchTours/tours.service';

@Component({
  selector: 'app-review-query',
  templateUrl: './review-query.component.html',
  styleUrls: ['./review-query.component.css']
})
export class ReviewQueryComponent implements OnInit {

  queries:any;
  constructor(private queryService:ToursService) {
    this.queryService.getAdminHomeQuery().subscribe((data)=>{
      this.queries = data;
      console.log(data)
    })
  }

  ngOnInit(): void {
  }

  updateQuery(data:any){
    this.queryService.updateQueryStatus(data.status, data.id);
  }

}
