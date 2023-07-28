import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StudentsFormDialogComponent } from './components/students-form-dialog/students-form-dialog.component';
import { StudentsListComponent } from './components/students-list/students-list.component';



@NgModule({
  declarations: [
    StudentsComponent,
    StudentsFormDialogComponent,
    StudentsListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class StudentsModule { }
