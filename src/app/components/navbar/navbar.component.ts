import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faLocationArrow, faEnvelope, faBars, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  slug:string = '';
  hidden:boolean = false;
  activeNav(){
    setTimeout(() => {
      this.slug =  window.location.href;
      const split  = window.location.href.split('/');
      if(split[3] === 'admin'){
        this.hidden = true;
      }
    }, 100);
  }
  constructor(private router:Router) {
    this.activeNav();
  }
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

  ngOnInit(): void {
  }

  // To Close all popups like navbar and header content
  id(e:any){
    if(e.target.id === 'header' || e.target.id === 'navbar'){
      return false;
    }
    else{
      return true;
    }
  }
  closeAll(e:any){
    if(this.id(e)){
      this.active = false;
      this.subNav = false;
    }
  }


}
