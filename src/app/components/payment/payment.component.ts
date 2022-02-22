import { Component, OnInit } from '@angular/core';
import { faSlash } from '@fortawesome/free-solid-svg-icons';
import * as AOS from 'aos';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  faSlash = faSlash;

  constructor() { }

  ngOnInit(): void {
    AOS.init({
      duration: 800,
      offset: 150,
    })
  }

}
