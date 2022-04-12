import { Component } from '@angular/core';
import { MobileMenuService } from 'src/app/services/mobile-menu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor(
    private mobileMenuService: MobileMenuService,
    private router: Router,
  ) {
  }

  public result = { 
    firstName: "", 
    lastName: "",
    email: "",
    gender: "",
    favouriteColor: "",
    employed: false,
    notes: "",
  };

  colors = [
    {value: 'Red', viewValue: 'Red'},
    {value: 'Green', viewValue: 'Green'},
    {value: 'Blue', viewValue: 'Blue'}
  ];

  closeMobileMenu() {
    this.mobileMenuService.emitChange(false);
  }

  onSubmit(): void {
    this.router.navigateByUrl("/results", { state: this.result });
  }

}
