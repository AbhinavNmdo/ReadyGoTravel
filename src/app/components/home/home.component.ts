import { Component, OnInit } from '@angular/core';
import { ToursService } from 'src/app/services/fetchTours/tours.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  domesticPackages:any;
  foreignPackages:any;
  constructor(private tourData:ToursService) {
    this.tourData.getDomesticTour().subscribe((data)=>{
      this.domesticPackages = data;
      console.log(data);
    });
    this.tourData.getForeignTour().subscribe((data)=>{
      this.foreignPackages = data;
      console.log(data);
    })
  }

  ngOnInit(): void {
  }
}
