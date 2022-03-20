import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-post-tours',
  templateUrl: './post-tours.component.html',
  styleUrls: ['./post-tours.component.css']
})
export class PostToursComponent implements OnInit {

  constructor(private storage:AngularFireStorage) { }

  ngOnInit(): void {
  }
  addDay(){
    
  }
  path:any;
  uploadChange($event:any){
    this.path = $event.target.files[0];
  }
  submitTour(){
    const filepath = "/files"
  }
}
