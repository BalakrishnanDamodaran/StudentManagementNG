import { Component, OnInit } from '@angular/core';
import { CourseDetailsService } from '../service/course-details.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  
 courses; 
  constructor(private CourseService:CourseDetailsService) { }

  ngOnInit(): void {
    this.courses=this.CourseService.getCourse();

  }
Delete(data) {
alert("Hello "+data.Id)
  // this.CourseService.deleteCourse(Id);
 }


}
