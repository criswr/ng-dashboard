import { Component, OnDestroy } from '@angular/core';
import { Items, ItemsService } from './items.service';
import { Observable, Subscription, map } from 'rxjs';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})

export class ItemsComponent implements OnDestroy {

  public items: Items[] = []
  public allItems: Observable<Items[]>

  public suscription?: Subscription

  constructor(private itemsService: ItemsService) {

    this.allItems = this.itemsService.getItems()

    this.itemsService.loadItems()

    this.suscription = this.itemsService.getItems()
    .pipe(
      map(arr => arr.map(
        elem => ({
          ...elem, 
          price: (typeof elem.discount === 'number') ? elem.price - elem.price * elem.discount :elem.price,
          discount: '-'
        })
      ))
    )
    .subscribe({
      next: (value) => {
        this.items = value
      }
    })

  }
  ngOnDestroy(): void {
    this.suscription?.unsubscribe()
  }
}

