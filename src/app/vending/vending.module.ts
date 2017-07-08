/**
 * Created by wakdev on 5/17/17.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {routing} from './vending.routing';
import { SafePipe } from '../safe.pipe';
import {VendingComponent} from './vending.component';
import { ModalComponent } from '../vending/model.component';
import { HttpModule, JsonpModule } from '@angular/http';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    HttpModule,
    JsonpModule
  ],
  declarations: [
    VendingComponent,
    SafePipe,
    ModalComponent
  ],
})
export class VendingModule { }
