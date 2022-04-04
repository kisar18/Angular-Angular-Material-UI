import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MobileMenuService {
  constructor() { }

  public mobileMenuVisibility = new Subject<boolean>();
  changeEmitted$ = this.mobileMenuVisibility.asObservable();
  emitChange(change: boolean) {
    this.mobileMenuVisibility.next(change);
  }
}
