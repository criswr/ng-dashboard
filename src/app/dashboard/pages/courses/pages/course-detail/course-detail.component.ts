import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../../courses.service';
import { Course } from '../../courses.component';
import { EnrollmentExpanded } from '../../../enrollments/enrollments.component';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit{
  public id?: string
  public item?: Course
  public items?: EnrollmentExpanded[]
  public displayedColumns: string[] = ['id', 'name'];

  constructor (
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private coursesService: CoursesService,
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
      this.coursesService.getById(this.id).subscribe({
        next: res => this.item = res
      })

      this.coursesService.getByIdExpanded(this.id).subscribe({
        next: res => this.items = res
      })
    }
  }

}
