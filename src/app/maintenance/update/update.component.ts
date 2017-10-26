import {Component} from '@angular/core';
import {db} from '../../database.service';

import {Router} from "@angular/router";

@Component({
  selector: 'update',
  templateUrl: 'update.component.html',
  styleUrls: ['update.component.css'],
})


export class UpdateComponent {
  selectedProduct : any = {};
   products1: any = db.items.PRODUCTS1;
   products2: any = db.items.PRODUCTS2;
   products3: any = db.items.PRODUCTS3;
   products4: any = db.items.PRODUCTS4;


  constructor(private _router: Router){
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
  printhey(item?){
    console.log(item);
  }
}
