import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToursService } from 'src/app/services/fetchTours/tours.service';

interface queryInterface {
  name: string,
  phone: string,
  packageName: string,
  email: string,
}

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit {

  id:any = "";
  packageData:any;

  constructor(private route:ActivatedRoute, private tourData:ToursService, private router:Router) {
    this.id = this.route.snapshot.paramMap.get('slug')
    if(this.router.url.startsWith('/domestic')){
      this.tourData.getSingleDomesticTour(this.id).subscribe((data)=>{
        this.packageData = data
      })
    }
    else if(this.router.url.startsWith('/foreign')){
      this.tourData.getSingleForeignTour(this.id).subscribe((data)=>{
        this.packageData = data
      })
    }
  }

  sendQuery(data:queryInterface){
    const query = {
      name: data.name,
      phone: data.phone,
      packageName: this.packageData.packageName,
      email: data.email
    }
    this.tourData.postTourQuery(query);
  }
  
  
  ngOnInit(): void {}

}
