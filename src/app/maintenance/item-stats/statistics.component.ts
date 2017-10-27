import {Component} from '@angular/core';
import {db} from '../../database.service';
import {Router, ActivatedRoute} from '@angular/router'

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

  params:any;
  currentID :any;

  constructor(private _router: Router, private _routeparams: ActivatedRoute) {
    this.params = this._routeparams.params['_value'];
    this.currentID = this.params['id'];
    console.log(this.currentID);
    this.findID(this.currentID)

  }

  findID(id){
    console.log('In Use')
    for(let i = 0; i < db.items.length;i++){
      for(let j = 0; j < db.items[i].length;j++){
        console.log(db.items[i][j]);
        if(db.items[i][j].id == id){
          console.log(db.items[i][j]);
          return db.items[i][j];
        }
      }
    }
  }
}
