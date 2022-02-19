import { Component, OnInit } from '@angular/core';
import { ToursService } from 'src/app/services/fetchTours/tours.service';
import { environment } from 'src/environments/environment';
import * as AOS from 'aos';
import {faPaperPlane} from '@fortawesome/free-regular-svg-icons';
import {faPlane, faHotel, faBook, faCar, faPassport, faTrain, faWifi, faUtensils} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  faPaperPlane = faPaperPlane;
  faPlane = faPlane;
  faHotel = faHotel;
  faBook = faBook;
  faCar = faCar;
  faPassport = faPassport;
  faTrain = faTrain;
  faWifi = faWifi;
  faUtensils = faUtensils;

  domesticPackages:any;
  foreignPackages:any;
  tour:object = {
    packageName: 'Gujrat Tour',
    description: [
      'Somnath Temple',
      'Gir National Park',
      'Dwarkadhish Temple',
      'Bet Dwarka',
      'Nageshwar Jyotirlinga',
      'Rukmani Devi Temple',
      'ISCON Temple',
      'Swaminarayan Mandir',
    ],
    active: false
  }
  constructor(private tourData:ToursService) {
    this.tourData.getDomesticTour().subscribe((data)=>{
      this.domesticPackages = data;
    });
    this.tourData.getForeignTour().subscribe((data)=>{
      this.foreignPackages = data;
      console.log(data);
    })
    // this.tourData.getSingleDomesticTour('cjkOEDPxMR0u9g5LGLMl').subscribe((data)=>{
    //   console.log(data);
    // })
    // this.tourData.updateDomesticTour(false, 'cjkOEDPxMR0u9g5LGLMl');
    // this.tourData.deleteDomesticTour('cjkOEDPxMR0u9g5LGLMl');
    // this.tourData.postDomesticTour(this.tour);
  }

  cardHover:boolean = false;

  ngOnInit(): void {
    AOS.init({
      duration: 600
    });
  }
}
