import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';

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

  constructor(private storage:AngularFireStorage, private location:Location, private router:Router) {
    this.adminCheck();
  }

  ngOnInit(): void {
  }
  addDay(){
    
  }
  path:any;
  url:any;
  uploadChange($event:any){
    this.path = $event.target.files[0];
  }
  submitTour(){
    const filepath = `/files/${this.path.name}`;
    const storageRef = this.storage.ref(filepath);
    const uploadTask = this.storage.upload(filepath, this.path);
    uploadTask.snapshotChanges().pipe(
      finalize(()=>{
        storageRef.getDownloadURL().subscribe((url)=>{
          this.url = url;
          console.log(this.url)
        })
      })
    ).subscribe();
  }
}
