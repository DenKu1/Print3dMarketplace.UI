import { Component } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCircleArrowRight, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent {
  faUser = faUser;
  faEnvelope = faEnvelope;
  faLock = faLock;
  faCircleArrowRight = faCircleArrowRight;
}
