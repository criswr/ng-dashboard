import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

interface Notification {
  action: string;
  message: string;
}

@Injectable({ providedIn: 'root' })

export class ToastService {

  private toast$ = new Subject<Notification>()
  fire(message: string, action: string):void {
    this._snackBar.open(message, action, {
      duration: 2000,
    })
  }

  constructor(private _snackBar: MatSnackBar) {
    this.toast$.subscribe({
      next: (notification) => {
        this.fire(notification.message, notification.action)
      }
    })
  }
  
  fireToast(message: string, action = 'Aceptar'): void {
    this.toast$.next({
      action,
      message
    })
  }
}
