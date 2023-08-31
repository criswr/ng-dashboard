import { Component } from '@angular/core';
import { Student } from '../../students.component';
import { EnrollmentExpanded } from '../../../enrollments/enrollments.component';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from '../../students.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent {
  public id?: string
  public item?: Student
  public items?: EnrollmentExpanded[]
  public displayedColumns: string[] = ['id', 'name'];

  constructor (
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private studentsService: StudentsService,
  ) {
    const urlParam = this.activatedRoute.snapshot.params['id']
    if (!urlParam) {
      this.router.navigate(['dashboard', 'courses'])
    } else {
      this.id = urlParam
    }
  }

  ngOnInit(): void {
    if (this.id) {
      this.studentsService.getById(this.id).subscribe({
        next: res => this.item = res
      })

      this.studentsService.getByIdExpanded(this.id).subscribe({
        next: res => this.items = res
      })
    }
  }
}
