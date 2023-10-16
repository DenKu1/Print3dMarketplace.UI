import { Component } from '@angular/core';
import { faMapMarker, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { faCircleArrowRight, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'creator-profile',
  templateUrl: './creator-profile.component.html',
  styleUrls: ['./creator-profile.component.css']
})
export class CreatorProfileComponent
{
  faUser = faUser;
  faEnvelope = faEnvelope;
  faLock = faLock;
  faCircleArrowRight = faCircleArrowRight;
  faMapMarker = faMapMarker;
  faPhone = faPhone;
}
