import {Component} from '@angular/core';
import {db} from '../../database.service';

import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'update',
  templateUrl: 'exchange.component.html',
  styleUrls: ['exchange.component.css'],
})


export class ExchangeComponent {
  selectedProduct: any;
  currentID: any;
  params: any;

  constructor(private _router: Router, private _routeparams: ActivatedRoute ) {
    this.params = this._routeparams.params['_value'];
    this.currentID = this.params['id'];

    this.selectedProduct = db.methods.getItem(this.currentID);

    console.log(db.methods.getItem(this.currentID))

  }
}
