import { Component, HostListener } from '@angular/core';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faLocationArrow, faEnvelope, faBars, faEllipsisV } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  // Brands Icons
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faEnvelope = faEnvelope;

  // Solid Icons
  faPhone = faPhone;
  faLocationArrow = faLocationArrow;
  faBars = faBars;
  faEllipsisV = faEllipsisV

  adminPage:boolean = false;
  constructor(){
    if(window.location.href.endsWith('YzxtyD4SUw9g64U9TKSVtUvLnFKLjDem6AftGnMh')){
      this.adminPage=true;
    }
  }


  active:boolean = false;
  navFix:boolean =false;
  subNav:boolean = false;
  @HostListener('window:scroll', ['$event'])
  navbarFix(){
    if(window.pageYOffset > 95){
      this.navFix = true;
    }
    else if(window.pageYOffset < 95){
      this.navFix = false;
    }
  }
  toggleSubNav():void{
    this.subNav = !this.subNav;
  }
  toggleNav():void{
    this.active = !this.active;
  }
};
