import {Component} from '@angular/core';
import {db, Database} from '../database.service';
export class Product {
  id: number;
  picture: string;
  name: string;
  price: string;
  info: string;
  count: number;
}

// product id corresponds to it's col/row location in the grid

@Component({
  selector: 'app-vending',
  templateUrl: 'vending.component.html',
  styleUrls: ['vending.component.css'],
})


export class VendingComponent {
  products1:any = [];
  products2:any = [];
  products3:any = [];
  products4:any = [];
  totalCountForDay = [];


  selectedProduct: any = {};

  onSelect(product: Product): void {
    this.selectedProduct = product;
    let modal = document.getElementById('modal');
    modal.style.visibility = 'true';
    console.log(this.selectedProduct)
  }
  constructor(private _dbService: Database) {
    //console.log(db.items[0])
    this.itemDivider();
    console.log(this.products1);
    console.log(this.products2);
    console.log(this.products3);
    console.log(this.products4);
  }

  countFlag: boolean = false;
  printhey(product){

  }

  buy(){
    this._dbService.buy(this.selectedProduct);
   // this.totalCountForDay[this.selectedProduct.id] =
  }

  itemDivider(){
    for(let i = 0; i < db.items.length;i++ ){
      if(i < 5){
        this.products1.push(db.items[i]);
      }
      if(i >4 && i < 10){
        this.products2.push(db.items[i]);
      }
      if(i >9 && i < 15){
        this.products3.push(db.items[i]);
      }
      if(i >15 && i < 21){
        this.products4.push(db.items[i]);
      }
    }
  }

}
