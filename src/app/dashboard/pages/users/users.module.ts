import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UserFormDialogComponent } from './components/user-form-dialog/user-form-dialog.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    UsersComponent,
    UserFormDialogComponent,
    UsersListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class UsersModule { }
