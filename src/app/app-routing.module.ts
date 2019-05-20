import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BuildingComponent } from './building/building.component';
import { FlorComponent } from './flor/flor.component';
import { OwnerComponent } from './owner/owner.component';

const appRoutes: Routes = [
	{ path: 'dashboard', component:DashboardComponent },
	{ path: 'building', component:BuildingComponent },
	{ path: 'flor', component:FlorComponent },
	{ path: 'owner', component:OwnerComponent },
 	{ path: '', redirectTo: 'dashboard', pathMatch: 'full' }
]


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
