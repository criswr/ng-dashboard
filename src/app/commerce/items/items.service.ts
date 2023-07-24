import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Items  {
  id: number,
  title: string,
  price: number,
  quantity: number,
  discount?: number | string
}

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private items: Items[] = 
  [
    {
      id: 1,
      title: 'Control joystick inalámbrico Sony PlayStation',
      price: 49990,
      quantity: 5,
      discount: 0.2
    },
    {
      id: 2,
      title: 'Redmi A2 Ram 2gb Rom 32gb',
      price: 66990,
      quantity: 2,
    },
    {
      id: 3,
      title: 'Audífonos Aiwa Inalambrico Tactil In-ear',
      price: 19290,
      quantity: 6,
      discount: 0.5
    },
    {
      id: 4,
      title: 'Lámpara Plafon Led Rgbwc 24w Sobrepuesto',
      price: 20199,
      quantity: 4,
    },
    {
      id: 5,
      title: 'Smart TV Caixun C32V1HA LED HD 32"',
      price: 299900,
      quantity: 2,
      discount: 0.15
    },
    {
      id: 6,
      title: 'Chaqueta Hombre Invierno Impermeable Envió Rápido',
      price: 35990,
      quantity: 10,
      discount: 0.3
    },
    {
      id: 7,
      title: 'Bandana Multifuncional Wrap',
      price: 1990,
      quantity: 15,
    },
  ]

  private items$ = new BehaviorSubject<Items[]>([])

  constructor() { }

  loadItems(): void {
    this.items$.next(this.items)
  }

  getItems(): Observable<Items[]> {
    return this.items$.asObservable()
  }
}
