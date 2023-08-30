import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrollmentsComponent } from './enrollments.component';
import { EffectsModule } from '@ngrx/effects';
import { EnrollmentsEffects } from './store/enrollments.effects';
import { StoreModule } from '@ngrx/store';
import { enrollmentsFeature } from './store/enrollments.reducer';
import { EnrollmentsRoutingModule } from './enrollments-routing.module';
import { EnrollmentsListComponent } from './components/enrollments-list/enrollments-list.component';
import { EnrollmentsFormDialogComponent } from './components/enrollments-form-dialog/enrollments-form-dialog.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    EnrollmentsComponent,
    EnrollmentsListComponent,
    EnrollmentsFormDialogComponent
  ],
  imports: [
    CommonModule,
    EnrollmentsRoutingModule,
    SharedModule,
    EffectsModule.forFeature([EnrollmentsEffects]),
    StoreModule.forFeature(enrollmentsFeature),
  ]
})
export class EnrollmentsModule { }
