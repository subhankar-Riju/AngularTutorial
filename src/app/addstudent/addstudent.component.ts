import { Component, OnInit } from '@angular/core';
import { StudentList } from '../services/ListOfStudents.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css'],
})
export class AddstudentComponent implements OnInit {

  constructor(private stu_service:StudentList) { }

  ngOnInit(): void {
    console.log("add-student init");
    
  }

  AddStudnt(inp:HTMLInputElement){
    this.stu_service.addstudent(inp.value);
    this.stu_service.event.emit(inp.value);    
  }

}
