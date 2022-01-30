import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'readygotravels-angular';
  onNavClick(){
    const nav = document.getElementById('navul');
    nav?.classList.remove('hidden');
    nav?.classList.add('flex')
  }
}
