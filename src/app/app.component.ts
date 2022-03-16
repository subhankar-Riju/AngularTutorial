import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './services/Auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'displayList';

  constructor(private authservice:AuthService){}

  Login(){
    this.authservice.login();
  }

  Logout(){
    this.authservice.logout();
  }
 
}
