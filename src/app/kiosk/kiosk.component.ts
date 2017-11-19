import {Component, NgModule} from '@angular/core';
import {Database} from "../database.service";


@Component({
  templateUrl: 'kiosk.component.html' ,
  styleUrls: ['kiosk.component.css'],
})

export class KioskComponent {
  iframe: any;

  constructor(private db:Database){
  //  db.makeDatabase();
  }

}
