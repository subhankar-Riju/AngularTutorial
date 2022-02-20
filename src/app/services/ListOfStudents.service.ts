import { EventEmitter } from "@angular/core";

export class StudentList{
    user=["riju",
            "rimpa",
            "manish",
            "punam"
         ]

    constructor(){}

    event=new EventEmitter<string>();

    addstudent(name:string){
        this.user.push(name);
        this.event.emit(name);
    }



}