import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnChanges,OnInit {

  @Input() obj!:string;
  id!:number;
  name!:string;
  
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
      this.route.params.subscribe(data=>{
        this.id=data['id'],
        this.name=data['name']
      })
  }

  ngOnChanges(changes: SimpleChanges): void {
      

  }

}
