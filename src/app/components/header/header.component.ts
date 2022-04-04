import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() mobileMenuVisibility:EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  changeMobileMenuVisibility() {
    this.mobileMenuVisibility.emit();
  }

}
