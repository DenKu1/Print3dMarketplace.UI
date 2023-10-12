import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleSelectionComponent } from './components/role-selection/role-selection.component';
import { CustomerRegistrationComponent } from './components/customer-registration/customer-registration.component';
import { CreatorRegistrationComponent } from './components/creator-registration/creator-registration.component';

const routes: Routes = [
  { path: 'role-selection', component: RoleSelectionComponent },
  { path: 'customer-registration', component: CustomerRegistrationComponent },
  { path: 'creator-registration', component: CreatorRegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
