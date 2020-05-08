import { AdminModule } from './admin/admin.module';
import { FeedbackService } from './feedback.service';
import { PaymentDetailsService } from './payment-details.service';
import { EmployeeDetailService } from './employee-detail.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { SliderComponent } from './slider/slider.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HttpClientModule } from '@angular/common/http';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { FeedbackComponent } from './feedback/feedback.component';
import { UploadComponent } from './upload/upload.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { AddUserComponent } from './add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    EmployeeListComponent,
    SliderComponent,
    AboutUsComponent,
    PaymentDetailsComponent,
    AddEmployeeComponent,
    FeedbackComponent,
    UploadComponent,
    CreateUserComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AdminModule
    

  ],
  providers: [EmployeeDetailService,PaymentDetailsService,FeedbackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
