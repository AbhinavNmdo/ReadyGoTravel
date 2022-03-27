import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faSlash } from '@fortawesome/free-solid-svg-icons';
import { ToursService } from 'src/app/services/fetchTours/tours.service';
import * as AOS from 'aos';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tour-detail',
  templateUrl: './tour-detail.component.html',
  styleUrls: ['./tour-detail.component.css']
})
export class TourDetailComponent implements OnInit {

  slug:string = '';
  tour:object|any = {};
  faSlash = faSlash;
  constructor(private route:ActivatedRoute, private tourServices:ToursService, private location:Location) {
    this.route.params.subscribe((params)=>{
      this.slug = params['id'];
    })
    console.log(this.location.path().split('/')[2])
    if(this.location.path().split('/')[2] === 'foreign'){
      this.tourServices.getSingleForeignTour(this.slug).subscribe((data) => {
        data.forEach(element => {
          this.tour = element;
        });
      })
    }else if(this.location.path().split('/')[2] === 'domestic'){
      this.tourServices.getSingleDomesticTour(this.slug).subscribe((data) => {
        data.forEach(element => {
          this.tour = element;
        });
      })
    }
  }

  ngOnInit(): void {
    AOS.init({
    duration: 800,
    offset: 150,
  });
  }

}
