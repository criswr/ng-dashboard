import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserValidatorErrorsPipe } from './pipes/user-validator-errors.pipe';

import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { FullNamePipe } from './pipes/full-name.pipe';
import { Font20Directive } from './directives/font20.directive';

@NgModule({
  declarations: [
    UserValidatorErrorsPipe,
    FullNamePipe,
    Font20Directive
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
    FullNamePipe,
    Font20Directive
  ]
})
export class SharedModule { }
