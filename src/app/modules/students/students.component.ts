import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  students = [
    {
      fisrtName: 'Elise',
      lastName: 'Nguyen',
      origin: 'Chile',
      grade: 95
    },
    {
      fisrtName: 'Ronnie',
      lastName: 'Valentine',
      origin: 'Chile',
      grade: 45
    },
    {
      fisrtName: 'Sophie',
      lastName: 'Klein',
      origin: 'Estados Unidos',
      grade: 80
    },
    {
      fisrtName: 'Stanley',
      lastName: 'Elliott',
      origin: 'Argentina',
      grade: 60
    },
    {
      fisrtName: 'Rio',
      lastName: 'Parsons',
      origin: 'Argentina',
      grade: 30
    },
    {
      fisrtName: 'Isha',
      lastName: 'Moss',
      origin: 'Chile',
      grade: 95
    },
  ]
}
