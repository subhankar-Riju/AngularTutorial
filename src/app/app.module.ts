import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { StudentComponent } from './student/student.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { StudentList } from './services/ListOfStudents.service';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';

import { AppRoute } from './app-routing.Module';
import { NotFoundComponent } from './not-found/not-found.component';





@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentComponent,
    AddstudentComponent,
    HomeComponent,
    UsersComponent,
    CategoriesComponent,
    UserComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoute
  ],
  providers: [StudentList],
  bootstrap: [AppComponent]
})
export class AppModule { }
