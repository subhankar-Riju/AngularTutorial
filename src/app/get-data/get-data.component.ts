import { Component, DoCheck, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GetServiceService } from '../services/get-service.service';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.css']
})
export class GetDataComponent implements OnInit{
dataStudent:any;
namesrch!:string;
fnamesrch!:string;
mnamesrch!:string;
rollsrch!:number;
classsrch!:number;
citysrch!:string;
addresssrch!:string;

@ViewChild('row_page') row_page!:ElementRef;

nextPage=0;

rp:string="10";

editForm!:FormGroup;



  constructor(private ser:GetServiceService) { }

  ngOnInit(): void {
    this.ser.getData();
    this.ser.Call().subscribe(data=>{
      this.dataStudent=data;
      console.log(this.dataStudent)
    });

    this.editForm=new FormGroup({
      "name":new FormControl(null,Validators.required),
      "fname":new FormControl(null,Validators.required),
      "mname":new FormControl(null,Validators.required),
      "city":new FormControl(null,Validators.required),
      "address":new FormControl(null,Validators.required),
      "class":new FormControl(null,Validators.required),
      "roll":new FormControl(null,Validators.required)


    })


  }




  next(){
    this.ser.nextPage++;
    this.ser.getData();
    this.ser.Call().subscribe(data=>{
      this.dataStudent=data;
      console.log(this.dataStudent)
    });
  }

  previous(){
    if(this.ser.nextPage<=0){
      alert("oops this is the first Page");
    }
    else{
    this.ser.nextPage--;
    this.ser.getData();
    this.ser.Call().subscribe(data=>{
      this.dataStudent=data;
      console.log(this.dataStudent)
    });
  }


  }

  search(){
    const qry={
      name:this.namesrch,
      class:this.classsrch,
      roll:this.rollsrch,
      fname:this.fnamesrch,
      mname:this.mnamesrch,
      city:this.citysrch,
      address:this.addresssrch
    }

    this.ser.Search(qry);

    this.ser.Call().subscribe(data=>{
      this.dataStudent=data;
      console.log(data);
      
    });
    
    

  }

  CommitChanges(){
    const body={
      name:this.editForm.get("name")?.value,
      
      fathersName:this.editForm.get("fname")?.value,
      mothersname:this.editForm.get("mname")?.value,
      class:this.editForm.get("class")?.value,
      city:this.editForm.get("city")?.value,
      address:this.editForm.get("address")?.value,
      roll:this.editForm.get("roll")?.value,
    }

    this.ser.putData(body).subscribe(data=>{
      console.log("done");
      
    });

    
  }

  Reload(){
    this.ser.rowPerPage=parseInt(this.rp);
    this.ser.getData();
    
    this.ser.Call().subscribe(data=>{
      this.dataStudent=data;
      console.log(this.dataStudent)
    });

  }

  delete(student:any){
    //this.dataStudent=student;
    console.log(this.rp);

    

  }

 

  edit(student:any){
    //this.dataStudent=student;
   // console.log(student.id);
    
    this.editForm.get("name")?.setValue(student.name);
    this.editForm.get("fname")?.setValue(student.fathersName);
    this.editForm.get("mname")?.setValue(student.mothersname);
    this.editForm.get("class")?.setValue(student.class);
     this.editForm.get("city")?.setValue(student.city);
    this.editForm.get("address")?.setValue(student.address);
     this.editForm.get("roll")?.setValue(student.roll);
    // this.editForm.get()?.setValue();


  }

}
