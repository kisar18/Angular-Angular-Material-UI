import { Component } from '@angular/core';
import { FormResultsService } from 'src/app/services/form-results.service';
import { MobileMenuService } from 'src/app/services/mobile-menu.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form-results',
  templateUrl: './form-results.component.html',
  styleUrls: ['./form-results.component.css']
})
export class FormResultsComponent {
  
  firstName = "";
  subscription: Subscription;

  constructor(
    private mobileMenuService: MobileMenuService,
    private formResultsService: FormResultsService
  ) { 
    this.subscription = this.formResultsService.changeEmitted$.subscribe(res => {
      this.firstName = res;
      console.log(this.firstName);
    });
  }


  closeMobileMenu() {
    this.mobileMenuService.emitChange(false);
  }

}
