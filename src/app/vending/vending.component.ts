import {Component} from '@angular/core';
import { Http, JsonpModule } from '@angular/http';


@Component({
  selector: 'app-vending',
  templateUrl: 'vending.component.html' ,
  styleUrls: ['vending.component.css'],

})

export class VendingComponent {
  iframe: any;
  constructor() {
    // http.get('/data')
  }
}
