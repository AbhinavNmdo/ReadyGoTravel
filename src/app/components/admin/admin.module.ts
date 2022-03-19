import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { ReviewQueryComponent } from './review-query/review-query.component';
import { FormsModule } from '@angular/forms';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminComponent } from './admin.component';
import { PostToursComponent } from './post-tours/post-tours.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    ReviewQueryComponent,
    AdminLoginComponent,
    AdminComponent,
    PostToursComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AdminRoutingModule
  ],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
