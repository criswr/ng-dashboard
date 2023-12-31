import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersComponent } from './teachers.component';
import { TeachersListComponent } from './components/teachers-list/teachers-list.component';
import { TeachersFormDialogComponent } from './components/teachers-form-dialog/teachers-form-dialog.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TeachersRoutingModule } from './teachers-routing.module';



@NgModule({
  declarations: [
    TeachersComponent,
    TeachersListComponent,
    TeachersFormDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TeachersRoutingModule,
  ]
})
export class TeachersModule { }
