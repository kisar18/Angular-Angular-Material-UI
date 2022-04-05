import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormResultsService {

  constructor() { }

  private firstName = new Subject<string>();

  changeEmitted$ = this.firstName.asObservable();

  emitChange(fName: string) {
    this.firstName.next(fName);
  }
}
