import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  routeSubs!:Subscription;
  intervalSubs!:Subscription;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSubs=this.route.params.subscribe(data=>{
      console.log("Hey subscribed");
    })

    // this.intervalSubs=interval(1000).subscribe(data=>{
    //   console.log(data);
      
    // })
  }
  ngOnDestroy(): void {
      //this.intervalSubs.unsubscribe();
  }

}
