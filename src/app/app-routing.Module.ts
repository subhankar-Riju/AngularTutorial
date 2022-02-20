import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CategoriesComponent } from "./categories/categories.component";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { UserComponent } from "./user/user.component";
import { UsersComponent } from "./users/users.component";

const appRoute:Routes=[
    {path:'',component:HomeComponent},
    {path:'users',component:UsersComponent,
    children:[{path:':id/:name',component:UserComponent}]
  },
    {path:'categories',component:CategoriesComponent},
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