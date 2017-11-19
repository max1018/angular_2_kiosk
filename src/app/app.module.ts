import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { MaterialModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-bootstrap';
import { Database } from './database.service';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // MaterialModule,
    NgbModule,
    CarouselModule.forRoot(),
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [
    Database
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
