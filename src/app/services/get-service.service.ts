import { HttpClient } from '@angular/common/http';
import { DoCheck, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GetServiceService{
  IsLoggedIn=false;
  Qry!:string;
  nextPage=0;
  rowPerPage:number=10;
  signUpUrl="https://localhost:5001/signup";

  constructor(private http:HttpClient) {}

  signup(name:string,password:string,email:string){
    const body={
      name:name,
      email:email,
      password:password
    }
    return this.http.post(this.signUpUrl,body);

  }

  login(email:string,password:string){
    const body={
      email:email,
      password:password
    }
    return this.http.post(this.signUpUrl,body);
  }

  LoggedIn(){
    this.IsLoggedIn=true;
  }

  Call(){
    console.log(this.rowPerPage);
    
    return this.http.get(this.Qry);
  }
   
  getData(){
    this.Qry="https://localhost:5001/api/Students/"+this.rowPerPage+"/"+this.nextPage+"/0/0/0/0/0/0/0/0";

   // return this.Qry;
    
  }

  putData(body:any){
    return this.http.put("https://localhost:5001/api/Students/"+body.roll+"/"+body.class,body)
  }

  Search(student:any){
    this.Qry+="?srch=true";
    if(student.roll!=null){
      this.Qry+="&roll="+student.roll;
    }
    if(student.name!=null){
      this.Qry+="&name="+student.name;
    }
    if(student.fname!=null){
      this.Qry+="&fathersName="+student.fname;
    }
    if(student.mname!=null){
      this.Qry+="&mothersname="+student.mname;
    }
    if(student.city!=null){
      this.Qry+="&city="+student.city;
    }
    if(student.address!=null){
      this.Qry+="address="+student.address;
    }
    if(student.class!=null){
      this.Qry+="&class="+student.class;
    }

    return this.Qry;
  }

  




}
