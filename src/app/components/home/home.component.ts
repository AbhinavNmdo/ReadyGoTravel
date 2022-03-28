import { Component, OnInit, ViewChild } from '@angular/core';
import { ToursService } from 'src/app/services/fetchTours/tours.service';
import * as AOS from 'aos';
import {faEnvelope, faPaperPlane} from '@fortawesome/free-regular-svg-icons';
import { LoadingBarService } from '@ngx-loading-bar/core';
import {faPlane, faHotel, faBook, faCar, faPassport, faTrain, faWifi, faUtensils, faPhone, faLocationArrow} from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl } from '@angular/forms';

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
  constructor(private tourData:ToursService, private loadingbar:LoadingBarService) {
    this.tourData.getDomesticTour().subscribe((data)=>{
      this.domesticPackages = data;
      console.log('Domestic ', data)
    });
    this.tourData.getForeignTour().subscribe((data)=>{
      this.foreignPackages = data;
      console.log('Foreign ', data)
    })
    this.returnComplete();
    // this.tourData.getSingleDomesticTour('cjkOEDPxMR0u9g5LGLMl').subscribe((data)=>{
    //   console.log(data);
    // })
    // this.tourData.updateDomesticTour(false, 'cjkOEDPxMR0u9g5LGLMl');
    // this.tourData.deleteDomesticTour('cjkOEDPxMR0u9g5LGLMl');
    // this.tourData.postDomesticTour(this.tour);
  }

  contactForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    query: new FormControl('')
  })


  // Contact Form Implimentation
  completed:string = 'none';
  date = new Date();
  postContact(){
    const data = this.contactForm.value;
    this.loadingbar.start();
    var ISTTime = new Date(this.date.getTime()+(330*60*1000));
    const today = ISTTime.getDate();
    const month = ISTTime.getMonth()+1;
    const year = ISTTime.getFullYear();
    const hour = ISTTime.getHours();
    const minutes = ISTTime.getMinutes();
    const query:object = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      query: data.query,
      status: 'new',
      date: today+'/'+month+'/'+year+', '+ hour+':'+minutes
    }
    try {
      this.tourData.postQuery(query).then(()=>{
        this.completed = 'success';
        this.contactForm.reset();
        this.loadingbar.stop();
        this.returnComplete();
      });
    } catch (error) {
      this.completed = 'failed';
      this.returnComplete();
      this.loadingbar.stop();
    }
  }

  cardHover:any;
  query:any;
  hoverMe(data:any){
    this.cardHover = data;
  }
  
  returnComplete(){
    setTimeout(() => {
      this.completed = 'none';
    }, 4000);
  }

  ngOnInit(): void {
    AOS.init({
      duration: 800,
      offset: 150,
    });
  }

}
