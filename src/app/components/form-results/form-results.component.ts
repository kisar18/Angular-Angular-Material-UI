import { Component, OnInit } from '@angular/core';
import { MobileMenuService } from 'src/app/services/mobile-menu.service';

@Component({
  selector: 'app-form-results',
  templateUrl: './form-results.component.html',
  styleUrls: ['./form-results.component.css']
})
export class FormResultsComponent implements OnInit {
  
  private result;

  constructor(private mobileMenuService: MobileMenuService) {
  }

  ngOnInit() {
    this.result = history.state;
  }

  getFirstName() { return this.result.firstName; }
  getLastName() { return this.result.lastName; }
  getEmail() { return this.result.email; }
  getGender() { return this.result.gender; }
  getFavouriteColor() { return this.result.favouriteColor; }
  getEmployed() { return this.result.employed; }
  getNotes() { return this.result.notes; }

  closeMobileMenu() {
    this.mobileMenuService.emitChange(false);
  }

}
