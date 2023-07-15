import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard.component';
import { UsersComponent } from './pages/users/users.component';
import { UserFormDialogComponent } from './pages/users/components/user-form-dialog/user-form-dialog.component';
import { UsersListComponent } from './pages/users/components/users-list/users-list.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    UsersComponent,
    UserFormDialogComponent,
    UsersListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
