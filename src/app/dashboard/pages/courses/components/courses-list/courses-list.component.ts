import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../courses.component';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent {
  displayedColumns: string[] = ['id', 'subject', 'start', 'end', 'actions'];

  @Input()
  dataSource: Course[] = [];

  @Output()
  deleteCourse = new EventEmitter<Course>()

  @Output()
  editCourse = new EventEmitter<Course>()
}
