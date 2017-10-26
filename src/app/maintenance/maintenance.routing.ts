
import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {MaintenanceComponent} from './maintenance.component';
import {UpdateComponent} from "./update/update.component";


const route: Routes = [
   {path : '', component : MaintenanceComponent},
   {path : 'update', component : UpdateComponent}
]

export const routing: ModuleWithProviders = RouterModule.forChild(route);
