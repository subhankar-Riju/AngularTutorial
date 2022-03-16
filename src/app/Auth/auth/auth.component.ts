import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GetServiceService } from 'src/app/services/get-service.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  IsLogin=false;
  Form!:FormGroup;

  constructor(private ser:GetServiceService) { }

  OnSwitch(){
    if(this.IsLogin){
      this.IsLogin=false;
    }
    else{
      this.IsLogin=true;
    }
  }

  onFormSubmit(){
    //console.log(this.Form.controls['email'].hasError('required'));
    
  }

  ngOnInit(): void {
    this.Form=new FormGroup({
      'name':new FormControl(null,Validators.required),
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'password':new FormControl(null,[Validators.required,Validators.minLength(6)])
    });
  }

  SignupORlogin(){
    if(this.IsLogin){
      this.ser.login(this.Form.get("email")?.value,this.Form.get("password")?.value)
      .subscribe(data=>{
        alert("logged in Sucessfully");
        this.ser.LoggedIn();
      })    
        

    }
    else{
      this.ser.signup(this.Form.get("name")?.value,this.Form.get("email")?.value,this.Form.get("password")?.value)
      .subscribe(data=>{
        console.log("login sucessfull");
        
      });

    }
  }

}
