import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../../students.component';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent {
  displayedColumns: string[] = ['id', 'name', 'timestamp', 'actions'];

  @Input()
  dataSource: Student[] = [];

  @Output()
  deleteStudent = new EventEmitter<Student>()

  @Output()
  editStudent = new EventEmitter<Student>()
}
