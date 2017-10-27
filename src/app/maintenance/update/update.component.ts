import {Component} from '@angular/core';
import {db} from '../../database.service';

import {Router} from "@angular/router";

@Component({
  selector: 'update',
  templateUrl: 'update.component.html',
  styleUrls: ['update.component.css'],
})


export class UpdateComponent {
  selectedProduct: any = {};
  products1: any = db.items.PRODUCTS1;
  products2: any = db.items.PRODUCTS2;
  products3: any = db.items.PRODUCTS3;
  products4: any = db.items.PRODUCTS4;


  restock: number;
  newPrice:any;

  constructor(private _router: Router) {
    console.log(this.products1)
  }

  // onSubmit(login){
  //   console.log(login.value);
  //   this._router.navigate(['maintenance/update']);
  // }

  onSelect(product: any): void {
    this.selectedProduct = product;
    let modal = document.getElementById('modal');
    modal.style.visibility = 'true';
    console.log(this.selectedProduct)
  }

  printhey(item?) {
    console.log(item);
  }

  restockConfirm(modal1, modal2, modal3) {
    this.selectedProduct.count = this.restock;
    this.updateCountnInDB();

    modal1.hide();
    modal2.hide();
    modal3.show();
  }

  updatePrice(modal1,modal2,modal3){
    this.selectedProduct.price = this.newPrice;
    this.updatePricenInDB();

    modal1.hide();
    modal2.hide();
    modal3.show();
  }

  setRestock(item) {
    console.log(item.value)
  }

  updateCountnInDB(){
    for(let i = 0; i < db.items.length;i++){
      for(let j = 0; j < db.item[i].length;j++){

        if(db.item[i][j].id == this.selectedProduct.id){
          db.item[i][j].count = this.selectedProduct.count;
        }
      }
    }
  }

  updatePricenInDB(){
    for(let i = 0; i < db.items.length;i++){
      for(let j = 0; j < db.item[i].length;j++){

        if(db.item[i][j].id == this.selectedProduct.id){
          db.item[i][j].count = this.selectedProduct.count;
        }
      }
    }
  }

  backToVending(){
    this._router.navigate([''])
  }

  navToStats(){
    this._router.navigate([])
  }

  navToItemExchange(){

  }

  navToImgReplacer(){

  }

}
