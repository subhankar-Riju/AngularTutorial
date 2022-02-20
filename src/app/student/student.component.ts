import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnChanges,OnInit {

  @Input() obj!:string;
  
  constructor() { }

  ngOnInit(): void {
      
  }

  ngOnChanges(changes: SimpleChanges): void {
      

  }

}
