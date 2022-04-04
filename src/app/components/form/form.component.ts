import { Component } from '@angular/core';
import { MobileMenuService } from 'src/app/services/mobile-menu.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor(private mobileMenuService: MobileMenuService) { }

  colors = [
    {value: 'Red', viewValue: 'Red'},
    {value: 'Green', viewValue: 'Green'},
    {value: 'Blue', viewValue: 'Blue'}
  ]

  closeMobileMenu() {
    this.mobileMenuService.emitChange(false);
  }

  onSubmit() {
    //
  }

}
