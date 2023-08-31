import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../courses.component';
import { Observable } from 'rxjs';
import { User } from '../../../users/users.component';
import { AuthService } from 'src/app/auth/auth.services';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent {
  public displayedColumns: string[] = ['id', 'subject', 'start', 'end', 'actions'];
  public authUser$: Observable<User | null>

  constructor (
    private authService: AuthService
  ) {
    this.authUser$ = this.authService.authUser$
  }
  
  @Input()
  dataSource: Course[] = [];

  @Output()
  deleteCourse = new EventEmitter<Course>()

  @Output()
  editCourse = new EventEmitter<Course>()
}
