import { Component } from '@angular/core';
import { faMapMarker, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { faCircleArrowRight, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'print-request-creation',
  templateUrl: './print-request-creation.component.html',
  styleUrls: ['./print-request-creation.component.css']
})
export class PrintRequestCreationComponent {
  faUser = faUser;
  faEnvelope = faEnvelope;
  faLock = faLock;
  faCircleArrowRight = faCircleArrowRight;
  faMapMarker = faMapMarker;
  faPhone = faPhone;
}
