import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminComponent } from './admin.component';
import { PostToursComponent } from './post-tours/post-tours.component';
import { ReviewQueryComponent } from './review-query/review-query.component';

const adminRoutes: Routes = [
  {path: 'admin', children:[
    {path: '', component: AdminLoginComponent},
    {path: 'YzxtyD4SUw9g64U9TKSVtUvLnFKLjDem6AftGnMh',children: [
      {path: '', component: ReviewQueryComponent},
      {path: 'posttours', component: PostToursComponent}
    ]},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
