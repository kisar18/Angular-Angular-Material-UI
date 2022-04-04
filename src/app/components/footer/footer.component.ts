import { Component } from '@angular/core';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { MobileMenuService } from 'src/app/services/mobile-menu.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor(private mobileMenuService: MobileMenuService) { }
  
  title = 'angular-app';
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faTwitter = faTwitter;

  closeMobileMenu() {
    this.mobileMenuService.emitChange();
  }

}
