import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { UsersModule } from './pages/users/users.module';

import { DashboardComponent } from './dashboard.component';
import { HomeModule } from './pages/home/home.module';
import { CoursesModule } from './pages/courses/courses.module';
import { StudentsModule } from './pages/students/students.module';
import { TeachersModule } from './pages/teachers/teachers.module';
import { DashboardRoutingModule } from './dashboard-routing.module';



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
    HomeModule,
    DashboardRoutingModule,
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
