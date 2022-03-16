import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StudentList } from '../services/ListOfStudents.service'

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {

  users_list:string[]=[]
  constructor(private stu_service:StudentList,private router:Router) { }

  ngOnInit(): void {

    this.users_list=this.stu_service.user;  
    // this.stu_service.event.subscribe((data)=>{
    //   console.log(data);     
    // })       
  }

 

}
