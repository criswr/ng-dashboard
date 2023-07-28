import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../../../students/students.component';

@Component({
  selector: 'app-teachers-list',
  templateUrl: './teachers-list.component.html',
  styleUrls: ['./teachers-list.component.scss']
})
export class TeachersListComponent {
  displayedColumns: string[] = ['id', 'name', 'timestamp', 'actions'];

  @Input()
  dataSource: Student[] = [];

  @Output()
  deleteTeacher = new EventEmitter<Student>()

  @Output()
  editTeacher = new EventEmitter<Student>()
}
