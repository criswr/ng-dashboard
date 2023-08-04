import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CoursesFormDialogComponent } from './components/courses-form-dialog/courses-form-dialog.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoursesRoutingModule } from './courses-routing.module';



@NgModule({
  declarations: [
    CoursesComponent,
    CoursesListComponent,
    CoursesFormDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoursesRoutingModule,
  ]
})
export class CoursesModule { }
