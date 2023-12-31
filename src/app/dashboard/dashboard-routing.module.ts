import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { adminGuard } from '../core/guards/admin.guard';

@NgModule({
    imports: [
      RouterModule.forChild([
        {
            path: 'home',
            component: HomeComponent
        },
        {
            path: 'users',
            canActivate: [adminGuard],
            loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule),
        },
        {
            path: 'students',
            loadChildren: () => import('./pages/students/students.module').then(m => m.StudentsModule),
        },
        {
            path: 'teachers',
            loadChildren: () => import('./pages/teachers/teachers.module').then(m => m.TeachersModule),
        },
        {
            path: 'courses',
            loadChildren: () => import('./pages/courses/courses.module').then(m => m.CoursesModule),
        },
        {
            path: 'enrollments',
            loadChildren: () => import('./pages/enrollments/enrollments.module').then(m => m.EnrollmentsModule),
        },
        {
            path: '**',
            redirectTo: 'home',
        },
      ]),
    ],
    exports: [RouterModule]
  })
  export class DashboardRoutingModule{}