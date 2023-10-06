import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleSelectionComponent } from './components/role-selection/role-selection.component';

const routes: Routes = [
  { path: 'role-selection', component: RoleSelectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
