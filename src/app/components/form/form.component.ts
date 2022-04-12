import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormResultsService } from 'src/app/services/form-results.service';
import { MobileMenuService } from 'src/app/services/mobile-menu.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor(
    private mobileMenuService: MobileMenuService,
    private formResultsService: FormResultsService
  ) {
  }

  colors = [
    {value: 'Red', viewValue: 'Red'},
    {value: 'Green', viewValue: 'Green'},
    {value: 'Blue', viewValue: 'Blue'}
  ];

  closeMobileMenu() {
    this.mobileMenuService.emitChange(false);
  }

  onSubmit(form: NgForm) {
    console.log("Form: ", form.value.firstName);
    this.formResultsService.emitChange(form.value.firstName);
  }

}
