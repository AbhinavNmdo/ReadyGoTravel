import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToursService {

  domesticUrl:string = "https://readygotravels-default-rtdb.firebaseio.com/domesticTours.json";
  foreignUrl:string = "https://readygotravels-default-rtdb.firebaseio.com/foreignTours.json";
  constructor(private http:HttpClient) {}

  getDomesticTour(){
    return this.http.get(this.domesticUrl);
  }

  getForeignTour(){
    return this.http.get(this.foreignUrl)
  }
}
