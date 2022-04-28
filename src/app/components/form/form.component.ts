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
    {value: 'Red'},
    {value: 'Green'},
    {value: 'Blue'}
  ];

  closeMobileMenu() {
    this.mobileMenuService.emitChange(false);
  }

  onSubmit(firstNameValid, lastNameValid, emailValid): void {
    if(firstNameValid && lastNameValid && emailValid) {
      this.router.navigateByUrl("/results", { state: this.result });
    }
  }

  onClear() {
    this.result.firstName = "";
    this.result.lastName = "";
    this.result.email = "";
    this.result.gender = "";
    this.result.favouriteColor = "";
    this.result.employed = false;
    this.result.notes = "";
  }

}
