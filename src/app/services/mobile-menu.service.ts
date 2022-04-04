import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MobileMenuService {
  constructor() { }

  private mobileMenuVisibility = new Subject<boolean>();
  changeEmitted$ = this.mobileMenuVisibility.asObservable();
  emitChange() {
    this.mobileMenuVisibility.next(!this.mobileMenuVisibility);
  }
}
