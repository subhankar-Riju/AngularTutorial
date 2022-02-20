import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  id!:number;
  name!:string;
  constructor(private route:ActivatedRoute){
    this.id=this.route.snapshot.params['id'];
    this.name=this.route.snapshot.params['name'];
  }
  ngOnInit(): void {
  }

}
