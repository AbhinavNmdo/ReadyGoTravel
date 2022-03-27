import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { TourComponent } from './components/tour/tour.component';
import { ContactComponent } from './components/contact/contact.component';
import { PaymentComponent } from './components/payment/payment.component';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { ReviewQueryComponent } from './components/admin/review-query/review-query.component';
import { PostToursComponent } from './components/admin/post-tours/post-tours.component';
import { TourDetailComponent } from './components/tour-detail/tour-detail.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'tours', children:[
    {path: '', component: TourComponent},
    {path: 'domestic/:id', component: TourDetailComponent},
    {path: 'foreign/:id', component: TourDetailComponent}
  ]},
  {path: 'contact', component: ContactComponent},
  {path: 'payments', component: PaymentComponent},
  {path: 'admin', children:[
    {path: '', component: AdminLoginComponent},
    {path: 'YzxtyD4SUw9g64U9TKSVtUvLnFKLjDem6AftGnMh', children:[
      {path: 'reviewcontrol', component: ReviewQueryComponent},
      {path: 'tourscontrol', component: PostToursComponent}
    ]}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
