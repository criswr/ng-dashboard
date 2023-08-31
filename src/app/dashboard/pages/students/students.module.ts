import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StudentsFormDialogComponent } from './components/students-form-dialog/students-form-dialog.component';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { StudentsRoutingModule } from './students-routing.module';
import { StudentDetailComponent } from './pages/student-detail/student-detail.component';



@NgModule({
  declarations: [
    StudentsComponent,
    StudentsFormDialogComponent,
    StudentsListComponent,
    StudentDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StudentsRoutingModule,
  ]
})
export class StudentsModule { }
