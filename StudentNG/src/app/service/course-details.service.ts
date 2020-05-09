import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../model/Course';

@Injectable({
  providedIn: 'root'
})
export class CourseDetailsService {
  

  readonly rootURL2 = 'https://api.github.com/users';

  readonly rootURL = 'https://localhost:44317/api';

  constructor(private http: HttpClient) {
    
   }
  //  getCourse(){
  //   return this.http.get(`${this.rootURL2}?per_page=10`);
  // }

  
  getCourse() {
    return this.http.get(`${this.rootURL}/Courses`);
  }
  postCourse(course:Course) {
    alert("Name isisisisisiiiiiiiiiiiiiiiiiiiii ="+course.Name);
    return this.http.post(this.rootURL + '/Courses', course);
  }
  deleteCourse(Id) {
    return this.http.delete(this.rootURL + '/Courses/'+ Id);
  }
}
