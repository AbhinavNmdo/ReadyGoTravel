import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Router } from '@angular/router';
import { finalize, startWith } from 'rxjs';
import { ToursService } from 'src/app/services/fetchTours/tours.service';

@Component({
  selector: 'app-post-tours',
  templateUrl: './post-tours.component.html',
  styleUrls: ['./post-tours.component.css']
})
export class PostToursComponent implements OnInit {

  adminCheck(){
    const url = this.location.path().split('/')[2];
    if(localStorage.getItem('adminToken')){
      if(localStorage.getItem('adminToken') !== `${url}Ql21YZQkW4Oz51Vct2SQ`){
        localStorage.removeItem('adminToken');
        this.router.navigate(['/'])
      }
    }else{
      localStorage.removeItem('adminToken');
      this.router.navigate(['/'])
    }
  }

  constructor(private storage:AngularFireStorage, private location:Location, private router:Router, private tourService:ToursService) {
    this.adminCheck();
  }

  ngOnInit(): void {
  }
  days:any = ['day1'];
  addDay(){
    let length = 2
    this.days.push(`day${length}`)
    length++
  }
  removeDays(){
    if(this.days.length !== 1){
      this.days.splice(this.days.length-1, 1)
    }
  }
  path:any;
  url:any;
  uploadChange($event:any){
    this.path = $event.target.files[0];
  }
  iternity:any = [];
  submitTour(data:any){
    const res = Object.keys(data).filter(v => v.startsWith('day')).map(e => data[e]);
    const inclusions = data.inclusions.split('*')
    const places = data.places.split(',')
    const filepath = `/files/${this.path.name}`;
    const storageRef = this.storage.ref(filepath);
    const uploadTask = this.storage.upload(filepath, this.path);
    uploadTask.snapshotChanges().pipe(
      finalize(()=>{
        storageRef.getDownloadURL().subscribe((url)=>{
          this.url = url;
          const tour = {
            name: data.name,
            duration: data.duration,
            mode: data.mode,
            price: data.price,
            pic: this.url,
            places: places,
            desc: data.desc,
            inclusions: inclusions,
            days: res
          }
          if(data.category === 'domestic'){
            this.tourService.postAdminDomesticTour(tour)
          }else if(data.category === 'foreign'){
            this.tourService.postAdminForeignTour(tour);
          }
        })
      })
    ).subscribe();
  }
}
