import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EnrollmentExpanded } from '../../enrollments.component';

@Component({
  selector: 'app-enrollments-list',
  templateUrl: './enrollments-list.component.html',
  styleUrls: ['./enrollments-list.component.scss']
})
export class EnrollmentsListComponent {
  displayedColumns: string[] = ['id', 'student', 'course', 'actions']
  
  @Output()
  deleteEnrollment = new EventEmitter<EnrollmentExpanded>()

  @Input()
  dataSource: EnrollmentExpanded[] = []

}
