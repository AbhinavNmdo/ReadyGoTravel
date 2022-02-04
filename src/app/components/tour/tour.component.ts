import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit {

  constructor(private route:ActivatedRoute) {}
  
  id:string|null = "";
  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('slug'))
    this.id = this.route.snapshot.paramMap.get('slug')
  }

}
