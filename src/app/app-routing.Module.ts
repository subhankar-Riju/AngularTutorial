import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./Auth/auth/auth.component";
import { CategoriesComponent } from "./categories/categories.component";
import { GetDataComponent } from "./get-data/get-data.component";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";
import { AuthService } from "./services/Auth.service";
import { AuthGuardService } from "./services/guards.ts/Auth-guard.service";
import { StudentComponent } from "./student/student.component";
import { StudentsComponent } from "./students/students.component";
import { UserComponent } from "./user/user.component";
import { UsersComponent } from "./users/users.component";

const appRoute:Routes=[
    {path:'',component:HomeComponent},
    {path:'users',component:UsersComponent,
    children:[{path:':id/:name',component:UserComponent}],
    canActivate:[AuthGuardService]
    
  },
    {path:'categories',component:CategoriesComponent},
    {path:'ReactiveForms',component:ReactiveFormComponent},
    {path:'students',component:StudentsComponent,
    children:[{path:':name',component:StudentComponent}]
  },
  {path:'auth',component:AuthComponent},
  {path:'Getdata',component:GetDataComponent,
  canActivate:[AuthGuardService]},
    {path:'**',component:NotFoundComponent}
  ];

@NgModule({
    imports:[
        RouterModule.forRoot(appRoute)
    ],
    exports:[RouterModule]
})
export class AppRoute{

}