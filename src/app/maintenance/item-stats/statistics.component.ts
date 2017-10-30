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
  products1: any = db.items[0].prodcuts;
  products2: any = db.items[1].prodcuts;
  products3: any = db.items[2].prodcuts;
  products4: any = db.items[3].prodcuts;

  restock: number;
  newPrice: any;

  params:any;
  currentID :any;
  currentItem: any;
  location = {row:-1,col:-1};
  today = new Date();

  constructor(private _router: Router, private _routeparams: ActivatedRoute) {
    console.log(this.today)
    this.params = this._routeparams.params['_value'];
    this.currentID = this.params['id'];
    console.log(this.currentID);
    this.findID();
    this.parseLocation();

    console.log('Testing DB Stored Methods');
    console.log(db.methods.getItem(0));

  }

  findID(){
    console.log('In Use')
    console.log( db.items[0].products.length);
    // console.log(db.items[0].products)
    for(let i = 0; i < db.items.length;i++){
      for(let j = 0 ; j < db.items[i].products.length;j++){

        if(db.items[i].products[j].id == this.currentID){
          console.log(db.items[i].products[j]);
          this.currentItem = db.items[i].products[j];
        }

      }
    }
  }

  parseLocation(){
    let loc = this.currentItem.location.toString();
    console.log(loc.substring(2,3));
    this.location.col = loc.substring(2,3);
    this.location.row = loc.substring(0,1);
  }
}
