import { Component } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCircleArrowRight, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent {
  faUser = faUser;
  faEnvelope = faEnvelope;
  faLock = faLock;
  faCircleArrowRight = faCircleArrowRight;
}
