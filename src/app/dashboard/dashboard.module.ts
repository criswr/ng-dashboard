import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { UsersModule } from './pages/users/users.module';

import { DashboardComponent } from './dashboard.component';
import { HomeModule } from './pages/home/home.module';
import { CoursesModule } from './pages/courses/courses.module';
import { StudentsModule } from './pages/students/students.module';
import { TeachersModule } from './pages/teachers/teachers.module';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    UsersModule,
    CoursesModule,
    StudentsModule,
    TeachersModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule,
    HomeModule,
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
