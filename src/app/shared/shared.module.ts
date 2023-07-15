import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserValidatorErrorsPipe } from './pipes/user-validator-errors.pipe';

import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    UserValidatorErrorsPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    UserValidatorErrorsPipe,
  ]
})
export class SharedModule { }
