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
  products1 = db.items.PRODUCTS1;
  products2 = db.items.PRODUCTS2;
  products3 = db.items.PRODUCTS3;
  products4 = db.items.PRODUCTS4;
  products5 = db.items.PRODUCTS5;
  products6 = db.items.PRODUCTS6;


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
    console.log(this.products5);
    console.log(this.products6);
  }

  countFlag: boolean = false;
  printhey(product){
    if(product.count == 0){
      this.countFlag = true;
    }
    else{
      this.countFlag = false;
      product.count--;
    }
  }

}
