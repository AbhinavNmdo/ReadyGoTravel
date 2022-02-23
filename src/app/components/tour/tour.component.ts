import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToursService } from 'src/app/services/fetchTours/tours.service';
import { faCar, faHotel, faSlash, faUtensils, faWifi } from '@fortawesome/free-solid-svg-icons';
import * as AOS from 'aos';

interface queryInterface {
  name: string,
  phone: string,
  packageName: string,
  email: string,
}

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit {
  // Icons
  faSlash = faSlash;
  faHotel = faHotel;
  faWifi = faWifi;
  faCar = faCar;
  faUtensils = faUtensils;


  // Variables for storing data
  domesticPackages:any;
  foreignPackages:any;
  constructor(private tourData:ToursService) {
    this.tourData.getDomesticTour().subscribe((data)=>{
      this.domesticPackages = data;
    });
    this.tourData.getForeignTour().subscribe((data)=>{
      this.foreignPackages = data;
    })
  }

  ngOnInit(): void {
    AOS.init({
      duration: 800,
      offset: 150,
    });
  }

  cardHover:any;
  hoverMe(data:any){
    this.cardHover = data;
  }

}
