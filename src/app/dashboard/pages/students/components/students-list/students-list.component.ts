import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../../students.component';
import { Observable } from 'rxjs';
import { User } from '../../../users/users.component';
import { AuthService } from 'src/app/auth/auth.services';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent {
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
  deleteStudent = new EventEmitter<Student>()

  @Output()
  editStudent = new EventEmitter<Student>()
}
