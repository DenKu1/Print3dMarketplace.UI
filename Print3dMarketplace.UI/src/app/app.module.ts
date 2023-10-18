import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RoleSelectionComponent } from './components/role-selection/role-selection.component';
import { CustomerRegistrationComponent } from './components/customer-registration/customer-registration.component';
import { CreatorRegistrationComponent } from './components/creator-registration/creator-registration.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { CreatorProfileComponent } from './components/creator-profile/creator-profile.component';
import { PrintRequestCreationComponent } from './components/print-request-creation/print-request-creation.component';

@NgModule({
  declarations: [
    AppComponent,
    RoleSelectionComponent,
    CustomerRegistrationComponent,
    CreatorRegistrationComponent,
    NavMenuComponent,
    CreatorProfileComponent,
    PrintRequestCreationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    FontAwesomeModule
  ]
})
export class AppModule { }
