import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { TourComponent } from './components/tour/tour.component';
import { ContactComponent } from './components/contact/contact.component';
import { PaymentComponent } from './components/payment/payment.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'tours', children:[
    {path: '', component: TourComponent},
  ]},
  {path: 'contact', component: ContactComponent},
  {path: 'payments', component: PaymentComponent},
  {path: 'admin', children:[
    {path: '', component: AdminLoginComponent},
    {path: 'YzxtyD4SUw9g64U9TKSVtUvLnFKLjDem6AftGnMh', component: AdminComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
