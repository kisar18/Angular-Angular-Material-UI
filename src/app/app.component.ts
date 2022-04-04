import { Component } from '@angular/core';
import { MobileMenuService } from 'src/app/services/mobile-menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private mobileMenuService: MobileMenuService) {
    this.mobileMenuService.changeEmitted$.subscribe(visibility => {
      this.visibilityOfMobileMenu = visibility;
  });
  }

  title = 'angular-app';

  colors = [
    {value: 'Red', viewValue: 'Red'},
    {value: 'Green', viewValue: 'Green'},
    {value: 'Blue', viewValue: 'Blue'}
  ]

  visibilityOfMobileMenu = false;

  changeVisibility() {
    this.visibilityOfMobileMenu = !this.visibilityOfMobileMenu;
  }

  closeMobileMenu() {
    if(this.visibilityOfMobileMenu) {
      this.mobileMenuService.emitChange();
    }
  }
}
