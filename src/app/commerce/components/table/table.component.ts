import { Component, Input } from '@angular/core';
import { Items } from '../../items/items.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input()
  itemsSource: Items[] = []
}
