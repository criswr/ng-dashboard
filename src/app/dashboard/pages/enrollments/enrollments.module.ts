import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrollmentsComponent } from './enrollments.component';
import { EffectsModule } from '@ngrx/effects';
import { EnrollmentsEffects } from './store/enrollments.effects';
import { StoreModule } from '@ngrx/store';
import { enrollmentsFeature } from './store/enrollments.reducer';
import { EnrollmentsRoutingModule } from './students-routing.module';



@NgModule({
  declarations: [
    EnrollmentsComponent
  ],
  imports: [
    CommonModule,
    EnrollmentsRoutingModule,
    EffectsModule.forFeature([EnrollmentsEffects]),
    StoreModule.forFeature(enrollmentsFeature),
  ]
})
export class EnrollmentsModule { }
