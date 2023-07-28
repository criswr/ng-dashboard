import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../../users.component';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  displayedColumns: string[] = ['uuid', 'name','email', 'actions'];

  @Input()
  dataSource: User[] = [];

  @Output()
  deleteUser = new EventEmitter<User>()

  @Output()
  editUser = new EventEmitter<User>()
}
