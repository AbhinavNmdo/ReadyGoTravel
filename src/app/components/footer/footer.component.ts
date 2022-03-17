import { Component, OnInit } from '@angular/core';
import { faFacebook, faInstagram, faTwitter, faFacebookMessenger, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faFacebookMessenger = faFacebookMessenger;
  faLinkedin = faLinkedin;

  hidden:boolean = false;
  activeNav(){
    setTimeout(() => {
      const split  = window.location.href.split('/');
      if(split[3] === 'admin'){
        this.hidden = true;
      }
    }, 100);
  }
  constructor() {
    this.activeNav();
  }

  ngOnInit(): void {
  }

}
