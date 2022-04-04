import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MobileMenuService } from 'src/app/services/mobile-menu.service';

@Component({
  selector: 'app-form-results',
  templateUrl: './form-results.component.html',
  styleUrls: ['./form-results.component.css']
})
export class FormResultsComponent implements OnInit {

  firstName: string = "";
  constructor(
    private route: ActivatedRoute, 
    private mobileMenuService: MobileMenuService
    ) { }

  @Output() mobileMenu:EventEmitter<string> = new EventEmitter<string>();

  closeMobileMenu() {
    this.mobileMenuService.emitChange(false);
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.firstName = params['firstName'];
    });
  }

}
