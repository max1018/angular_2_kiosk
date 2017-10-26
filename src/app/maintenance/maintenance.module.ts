/**
 * Created by wakdev on 5/17/17.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { routing } from './maintenance.routing';
import { MaintenanceComponent } from './maintenance.component';
import { HttpModule, JsonpModule } from '@angular/http';
import {UpdateComponent} from "./update/update.component";
import { ModalComponent } from './update/model.component';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    HttpModule,
    JsonpModule,
  ],
  declarations: [
    MaintenanceComponent,
    UpdateComponent,
    ModalComponent

  ],
  bootstrap: [MaintenanceComponent,UpdateComponent]
})
export class MaintenanceModule{}

