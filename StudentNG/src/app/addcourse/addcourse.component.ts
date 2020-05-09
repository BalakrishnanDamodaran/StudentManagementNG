import { Component, OnInit } from '@angular/core';
import { CourseDetailsService } from '../service/course-details.service';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {
  form: FormGroup;
  constructor(private courseService:CourseDetailsService, 
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      Id: [''],
      Name: [''],
      Fees:[0],
      Duration:[''],
      Tutor:['']
    
  });
}
onSubmit(from:NgForm){
  //this.submitted = true;
  alert("Name"+this.form.value.Name);
  // this.form.value.ImageUrl=this.Name;
  // alert("Submit Image URL="+this.form.value.ImageUrl);
  //this.form.value.Age =Number( this.form.value.Age );
  //this.form.value.Salary=Number(this.form.value.Salary );

  
  this.courseService.postCourse(this.form.value).subscribe();

}

}
