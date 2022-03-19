import { Component, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLocationArrow, faPhone } from '@fortawesome/free-solid-svg-icons';
import { ToursService } from 'src/app/services/fetchTours/tours.service';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faLocationArrow = faLocationArrow;

  constructor(private tourData:ToursService, private loadingbar:LoadingBarService) {
    this.returnComplete();
  }

  ngOnInit(): void {
  }

  // Contact Form Implimentation
  completed:string = 'none';
  inputValue:any;
  date = new Date();

  contact(data:any){
    this.loadingbar.start();
    var ISTTime = new Date(this.date.getTime()+(330*60*1000));
    const today = ISTTime.getDate();
    const month = ISTTime.getMonth()+1;
    const year = ISTTime.getFullYear();
    const hour = ISTTime.getHours();
    const minutes = ISTTime.getMinutes();
    console.log(month)
    const query:object = {
      firstName: data.firstname,
      lastName: data.lastname,
      email: data.email,
      phone: data.phone,
      query: data.query,
      status: 'new',
      date: today+'/'+month+'/'+year+', '+ hour+':'+minutes
    }
    try {
      this.tourData.postHomeQuery(query).then(()=>{
        this.completed = 'success';
        this.inputValue = null
        this.loadingbar.stop();
        this.returnComplete();
      });
    } catch (error) {
      this.completed = 'failed';
      this.returnComplete();
      this.loadingbar.stop();
    }
  }
  returnComplete(){
    setTimeout(() => {
      this.completed = 'none';
    }, 4000);
  }

}
