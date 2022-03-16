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
import { AuthService } from './services/Auth.service';
import { AuthGuardService } from './services/guards.ts/Auth-guard.service';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LenfilterPipe } from './pipes/lenfilter.pipe';
import { GetDataComponent } from './get-data/get-data.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './Auth/auth/auth.component';






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
    NotFoundComponent,
    ReactiveFormComponent,
    LenfilterPipe,
    GetDataComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoute,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
    

  ],
  providers: [StudentList,AuthService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
