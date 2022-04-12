import { Component, OnInit } from '@angular/core';
import { MobileMenuService } from 'src/app/services/mobile-menu.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-results',
  templateUrl: './form-results.component.html',
  styleUrls: ['./form-results.component.css']
})
export class FormResultsComponent implements OnInit {
  
  subscription: Subscription;
  result;

  constructor(private router: Router, private mobileMenuService: MobileMenuService) {
  }

  ngOnInit() {
    this.result = history.state;
  }

  closeMobileMenu() {
    this.mobileMenuService.emitChange(false);
  }

}
