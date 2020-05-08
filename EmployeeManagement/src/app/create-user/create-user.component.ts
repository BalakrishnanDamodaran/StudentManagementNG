import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EmployeeDetailService } from '../employee-detail.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {


  register=new FormGroup({

Name:new FormControl(''),
Age:new FormControl(''),
Salary: new FormControl('')

  });

  OnSubmit(){

    this.Service.postEmployee(this.register.value);
  }
  constructor(private Service:EmployeeDetailService) { }

  ngOnInit(): void {
  }

}
