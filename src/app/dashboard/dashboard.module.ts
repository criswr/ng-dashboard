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
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    DashboardComponent,
    UsersComponent,
    UserFormDialogComponent,
    UsersListComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    RouterModule,
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
