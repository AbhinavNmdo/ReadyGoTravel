import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingBarService } from '@ngx-loading-bar/core';
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

  constructor(private storage:AngularFireStorage, private location:Location, private router:Router, private tourService:ToursService, private loadingBar:LoadingBarService) {
    this.adminCheck();
  }

  ngOnInit(): void {
  }

  get daysControl(){
    return (<FormArray>this.postTour.get('days')).controls;
  }

  days:any = ['day1'];
  addDay(){
    let control:any = new FormControl('')
    let length = 2
    this.days.push(`day${length}`)
    length++;
    (<FormArray>this.postTour.get('days')).push(control);
  }
  removeDays(){
    if(this.days.length !== 1){
      this.days.splice(this.days.length-1, 1)
    }
  }


  // Grabbing the value of tours from front-end
  postTour = new FormGroup({
    name: new FormControl(''),
    duration: new FormControl(''),
    mode: new FormControl(''),
    price: new FormControl(''),
    pic: new FormControl(''),
    places: new FormControl(''),
    desc: new FormControl(''),
    days: new FormArray([]),
    inclusions: new FormControl(''),
    category: new FormControl(''),
  })
  submit(){
    // On submitting the value goes to database
    this.submitTour(this.postTour.value);
  }


  // Posting Data of Tours in firestore
  path:any;
  url:any;
  error:string = '';
  message:string = '';
  // Resetting the error and message string
  resetting(){
    setTimeout(() => {
      this.error = '';
      this.message = '';
    }, 4000);
  }

  uploadChange($event:any){
    // After change the pic the file will change
    this.path = $event.target.files[0];
  }

  // Uploading into database
  submitTour(data:any){
    this.loadingBar.start();
    if(data.name !== '' && data.duration !== '' && data.mode !== '' && data.price !== '' && data.pic !== '' && data.category !== '' && data.places !== '' && data.desc !== '' && data.day_1 !== '' && data.inclusions !== ''){

      const inclusions = data.inclusions.split('*')
      const places = data.places.split(',')
      const filepath = `/files/${this.path.name}`;
      const storageRef = this.storage.ref(filepath);
      const uploadTask = this.storage.upload(filepath, this.path);

      // Uploading photo to firestore
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
              days: data.days,
              is_active: true
            }
            console.log(tour)
            if(data.category === 'domestic'){
              this.resetting();
              this.tourService.postAdminDomesticTour(tour).then(()=>{
                this.loadingBar.stop();
                this.message = "Submitted in Domestic Tours";
                this.resetting();
                this.postTour.reset({});
              });
            }else if(data.category === 'foreign'){
              this.resetting();
              this.tourService.postAdminForeignTour(tour).then(()=>{
                this.loadingBar.stop();
                this.message = "Submitted in Foreign Tours";
                this.resetting();
                this.postTour.reset({});
              });
            }else{
              this.loadingBar.stop();
              this.error = "Select Category";
              this.resetting();
            }
          })
        })
      ).subscribe();
    }else{
      this.error = "Blank Fields";
      this.loadingBar.stop();
      this.resetting();
    }
  }
}
