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
