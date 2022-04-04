import { Component } from '@angular/core';
import { MobileMenuService } from 'src/app/services/mobile-menu.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private mobileMenuService: MobileMenuService) {}

  changeMobileMenuVisibility() {

    //if(!this.mobileMenuService.mobileMenuVisibility) {
    //}
    this.mobileMenuService.emitChange(true);
  }
}
