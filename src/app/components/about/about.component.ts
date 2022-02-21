import { Component, OnInit } from '@angular/core';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faSlash } from '@fortawesome/free-solid-svg-icons';
import * as AOS from 'aos';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  faSlash = faSlash;
  faWhatsapp = faWhatsapp;

  constructor() { }

  ngOnInit(): void {
    AOS.init({
      duration: 800,
      offset: 150,
    })
  }

}
