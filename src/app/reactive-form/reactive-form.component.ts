import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  _gender=['male','female'];
  SignUpForm!:FormGroup;
  InvalidNames=["Leela"];

  constructor() { }

  ngOnInit(): void {
    this.SignUpForm=new FormGroup({
      'uname':new FormControl(null,[Validators.required,this.IsValid.bind(this)]),
      'email':new FormControl(null,[Validators.email,Validators.required]),
      'gender':new FormControl('male'),
      'hobbies':new FormArray([])
    })
  }

IsValid(control:FormControl):{[s:string]:boolean} | null{
  if(this.InvalidNames.includes(control.value)){
    return {nameRestricted:true};
  }
  return null;
  

}


IsRestrictedEmails(con: FormControl):Promise<any> | Observable<any> | null{
  let promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(con.value==='t@t.com'){
        resolve({InvalidMail:true})
      }
      else{
      resolve(null)
      }
    },2000)
  });


  return promise;
}


  submitForm(){
    console.log(this.SignUpForm);
    
  }
  get hobbyControl(){
    //this.SignUpForm.get('uname')?.setValue('riju');

    return (<FormArray>this.SignUpForm.get('hobbies')).controls;
  }

  addHobby(){
    const control=new FormControl(null,Validators.required);
    (<FormArray>this.SignUpForm.get('hobbies')).push(control);

  }

  checkmail(){
    if(!this.SignUpForm.get('email')?.valid && this.SignUpForm.get('email')?.touched){
      return false;
    }
    return true;
  }

}
