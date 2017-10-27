import {Component} from '@angular/core';
import {db} from '../../database.service';

import {Router} from "@angular/router";

@Component({
  selector: 'update',
  templateUrl: 'statistics.component.html',
  styleUrls: ['statistics.component.css'],
})


export class StatsComponent {
  selectedProduct: any = {};
  products1: any = db.items.PRODUCTS1;
  products2: any = db.items.PRODUCTS2;
  products3: any = db.items.PRODUCTS3;
  products4: any = db.items.PRODUCTS4;


  restock: number;
  newPrice: any;

  constructor(private _router: Router) {
    console.log(this.products1)
  }
}
