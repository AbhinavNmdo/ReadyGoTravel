import { Component, OnInit, ViewChild } from '@angular/core';
import { ToursService } from 'src/app/services/fetchTours/tours.service';
import * as AOS from 'aos';
import {faEnvelope, faPaperPlane} from '@fortawesome/free-regular-svg-icons';
import {faPlane, faHotel, faBook, faCar, faPassport, faTrain, faWifi, faUtensils, faPhone, faLocationArrow} from '@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';

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
  faPhone = faPhone;
  faLocationArrow = faLocationArrow;
  faEnvelope = faEnvelope;

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
      console.log('Domestic ', data)
    });
    this.tourData.getForeignTour().subscribe((data)=>{
      this.foreignPackages = data;
      console.log('Foreign ', data)
    })
    // this.tourData.getSingleDomesticTour('cjkOEDPxMR0u9g5LGLMl').subscribe((data)=>{
    //   console.log(data);
    // })
    // this.tourData.updateDomesticTour(false, 'cjkOEDPxMR0u9g5LGLMl');
    // this.tourData.deleteDomesticTour('cjkOEDPxMR0u9g5LGLMl');
    // this.tourData.postDomesticTour(this.tour);
  }

  cardHover:any;
  query:any;
  hoverMe(data:any){
    this.cardHover = data;
  }
  
  contactHome(data:any){
    const query:object = {
      idField: data.firstname,
      firstName: data.firstname,
      lastName: data.lastname,
      email: data.email,
      phone: data.phone,
      query: data.query
    }
    this.tourData.postHomeQuery(query);
    console.log(query);
  }

  ngOnInit(): void {
    AOS.init({
      duration: 800,
      offset: 150,
    });
  }

}
