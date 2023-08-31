import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../../../students/students.component';
import { Observable } from 'rxjs';
import { User } from '../../../users/users.component';
import { AuthService } from 'src/app/auth/auth.services';

@Component({
  selector: 'app-teachers-list',
  templateUrl: './teachers-list.component.html',
  styleUrls: ['./teachers-list.component.scss']
})
export class TeachersListComponent {
  displayedColumns: string[] = ['id', 'name', 'timestamp', 'actions'];
  public authUser$: Observable<User | null>

  constructor (
    private authService: AuthService
  ) {
    this.authUser$ = this.authService.authUser$
  }
  
  @Input()
  dataSource: Student[] = [];

  @Output()
  deleteTeacher = new EventEmitter<Student>()

  @Output()
  editTeacher = new EventEmitter<Student>()
}
