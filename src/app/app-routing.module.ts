import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { TourComponent } from './components/tour/tour.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'domestic-tour-packages',
    children:[
      {path: '', component: TourComponent},
      {path: ':slug', component: TourComponent}
    ]
  },
  {path: 'foreign-tour-packages',
    children:[
      {path: '', component: TourComponent},
      {path: ':slug', component: TourComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
