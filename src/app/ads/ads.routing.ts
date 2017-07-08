
import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {AdsComponent} from './ads.component';
import {VendingComponent} from '../vending/vending.component'
import {WebviewerComponent} from '../webViewer/webViewer.component';


const route: Routes = [
  {path : '' , component : AdsComponent},
]

export const routing: ModuleWithProviders = RouterModule.forChild(route);
