import { Component, OnInit } from '@angular/core';
import { MobileMenuService } from 'src/app/services/mobile-menu.service';

@Component({
  selector: 'app-form-results',
  templateUrl: './form-results.component.html',
  styleUrls: ['./form-results.component.css']
})
export class FormResultsComponent implements OnInit {
  
  result;

  constructor(private mobileMenuService: MobileMenuService) {
  }

  ngOnInit() {
    this.result = history.state;
  }

  closeMobileMenu() {
    this.mobileMenuService.emitChange(false);
  }

}
