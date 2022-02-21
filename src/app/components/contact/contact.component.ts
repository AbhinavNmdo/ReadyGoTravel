import { Component, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLocationArrow, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faLocationArrow = faLocationArrow;

  constructor() { }

  ngOnInit(): void {
  }

}
