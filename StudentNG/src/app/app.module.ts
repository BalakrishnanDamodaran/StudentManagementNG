import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CourseComponent } from './course/course.component';
import { CourseDetailsService } from './service/course-details.service';
import { AddcourseComponent } from './addcourse/addcourse.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CourseComponent,
    AddcourseComponent,
   
  ],
  imports: [
    FormsModule,HttpClientModule,BrowserModule,
    AppRoutingModule,ReactiveFormsModule
  ],
  providers: [CourseDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
