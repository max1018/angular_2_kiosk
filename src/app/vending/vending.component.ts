import {Component} from '@angular/core';
import {db} from '../database.service';
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
  products1 = db.items[0].products;
  products2 = db.items[1].products;
  products3 = db.items[2].products;
  products4 = db.items[3].products
  totalCountForDay = [];


  selectedProduct: any = {};

  onSelect(product: Product): void {
    this.selectedProduct = product;
    let modal = document.getElementById('modal');
    modal.style.visibility = 'true';
    console.log(this.selectedProduct)
  }
  constructor() {
    console.log(this.products1);
    console.log(this.products2);
    console.log(this.products3);
    console.log(this.products4);
  }

  countFlag: boolean = false;
  printhey(product){

  }

  buy(){
    db.methods.getItem(this.selectedProduct.id);
    if(this.selectedProduct.count == 0){
      this.countFlag = true;
    }
    else{
      this.countFlag = false;
      this.selectedProduct.count--;
    }
   // this.totalCountForDay[this.selectedProduct.id] =
  }

}
