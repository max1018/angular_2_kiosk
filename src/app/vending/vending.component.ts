import {Component} from '@angular/core';

export class Product {
  id: number;
  picture: string;
  name: string;
  price: string;
  info: string;
}
// product id corresponds to it's col/row location in the grid
const PRODUCTS1: Product[] = [
  {id: 1.1, picture: '/assets/img/1-1.png', name: 'Pepsi', price: '1.50', info: '/assets/img/1-1-info.png'},
  {id: 1.2, picture: '/assets/img/1-2.png', name: 'Diet Pepsi', price: '1.50', info: '/assets/img/1-2-info.png'},
  {id: 1.3, picture: '/assets/img/1-3.png', name: 'Mountain Dew', price: '1.50', info: '/assets/img/1-3-info.png'},
  {id: 1.4, picture: '/assets/img/1-4.png', name: 'Diet Mountain Dew', price: '1.50', info: '/assets/img/1-4-info.png'},
  {id: 1.5, picture: '/assets/img/1-5.png', name: 'Mist Twist', price: '1.50', info: '/assets/img/1-5-info.png'},
  {id: 1.6, picture: '/assets/img/1-6.png', name: 'Diet Mist Twist', price: '1.50', info: '/assets/img/1-6-info.png'},
  {id: 1.7, picture: '/assets/img/1-7.png', name: 'Aquafina', price: '1.50', info: '/assets/img/1-7-info.png'},
  {id: 1.8, picture: '/assets/img/1-8.png', name: 'Mug Root Beer', price: '1.50', info: '/assets/img/1-8-info.png'},
  {id: 1.9, picture: '/assets/img/1-9.png', name: 'Diet Mug Root Beer', price: '2.00', info: '/assets/img/1-9-info.png'},

]

const PRODUCTS2: Product[] = [
  {id: 2.1, picture: '/assets/img/2-1.png', name: 'Coca Cola', price: '1.50', info: '/assets/img/2-1-info.png'},
  {id: 2.2, picture: '/assets/img/2-2.png', name: 'Diet Coca Cola', price: '1.50', info: '/assets/img/2-2-info.png'},
  {id: 2.3, picture: '/assets/img/2-3.png', name: 'Mello Yello', price: '1.50', info: '/assets/img/2-3-info.png'},
  {id: 2.4, picture: '/assets/img/2-4.png', name: 'Mello Yello Zero', price: '1.50', info: '/assets/img/2-4-info.png'},
  {id: 2.5, picture: '/assets/img/2-5.png', name: 'Sprite', price: '1.50', info: '/assets/img/2-5-info.png'},
  {id: 2.6, picture: '/assets/img/2-6.png', name: 'Sprite Zero', price: '1.50', info: '/assets/img/2-6-info.png'},
  {id: 2.7, picture: '/assets/img/2-7.png', name: 'Dasani', price: '1.50', info: '/assets/img/2-7-info.png'},
  {id: 2.8, picture: '/assets/img/2-8.png', name: 'Pibb Xtra', price: '1.50', info: '/assets/img/2-8-info.png'},
  {id: 2.9, picture: '/assets/img/2-9.png', name: 'Pibb Zero', price: '1.50', info: '/assets/img/2-9-info.png'},
]

const PRODUCTS3: Product[] = [
  {id: 3.1, picture: '/assets/img/3-1.png', name: 'Cheetohs', price: '.75', info: '/assets/img/3-1-info.png'},
  {id: 3.2, picture: '/assets/img/3-2.png', name: 'Doritos', price: '.75', info: '/assets/img/3-2-info.png'},
  {id: 3.3, picture: '/assets/img/3-3.png', name: 'Fritos', price: '.75', info: '/assets/img/3-3-info.png'},
  {id: 3.4, picture: '/assets/img/3-4.png', name: 'Lays Original', price: '.75', info: '/assets/img/3-4-info.png'},
  {id: 3.5, picture: '/assets/img/3-5.png', name: 'Funyuns', price: '.75', info: '/assets/img/3-5-info.png'},
  {id: 3.6, picture: '/assets/img/3-6.png', name: 'Lays Sour Cream and Onion', price: '.75', info: '/assets/img/3-6-info.png'},
  {id: 3.7, picture: '/assets/img/3-7.png', name: 'Cool Ranch Doritos', price: '.75', info: '/assets/img/3-7-info.png'},
  {id: 3.8, picture: '/assets/img/3-8.png', name: 'Flamin` Hot Cheetohs', price: '.75', info: '/assets/img/3-8-info.png'},
  {id: 3.9, picture: '/assets/img/3-9.png', name: 'Cracker Jack', price: '1.50', info: '/assets/img/3-9-info.png'},
]

const PRODUCTS4: Product[] = [
  {id: 4.1, picture: '/assets/img/4-1.png', name: 'Snickers', price: '.75', info: '/assets/img/4-1-info.png'},
  {id: 4.2, picture: '/assets/img/4-2.png', name: '3 Musketeers', price: '.75', info: '/assets/img/4-2-info.png'},
  {id: 4.3, picture: '/assets/img/4-3.png', name: 'Peanut M&M\'s', price: '.75', info: '/assets/img/4-3-info.png'},
  {id: 4.4, picture: '/assets/img/4-4.png', name: 'Twix', price: '.75', info: '/assets/img/4-4-info.png'},
  {id: 4.5, picture: '/assets/img/4-5.png', name: 'Orignal M&M\'s', price: '.75', info: '/assets/img/4-5-info.png'},
  {id: 4.6, picture: '/assets/img/4-6.png', name: 'Peanut Butter M&M\'s', price: '.75', info: '/assets/img/4-6-info.png'},
  {id: 4.7, picture: '/assets/img/4-7.png', name: 'Butterfinger', price: '.75', info: '/assets/img/4-7-info.png'},
  {id: 4.8, picture: '/assets/img/4-8.png', name: 'Sweet Tarts', price: '.75', info: '/assets/img/4-8-info.png'},
  {id: 4.9, picture: '/assets/img/4-9.png', name: ' ', price: '1.00', info: '/assets/img/4-9-info.png'},
]

const PRODUCTS5: Product[] = [
  {id: 5.1, picture: '/assets/img/5-1.png', name: 'Skittles (Original)', price: '.75', info: '/assets/img/5-1-info.png'},
  {id: 5.2, picture: '/assets/img/5-2.png', name: 'Starburst', price: '.75', info: '/assets/img/5-2-info.png'},
  {id: 5.3, picture: '/assets/img/5-3.png', name: 'Reeses Peanut Butter Cups', price: '.75', info: '/assets/img/5-3-info.png'},
  {id: 5.4, picture: '/assets/img/5-4.png', name: 'Kit Kat', price: '.75', info: '/assets/img/5-4-info.png'},
  {id: 5.5, picture: '/assets/img/5-5.png', name: 'Rolo', price: '.75', info: '/assets/img/5-5-info.png'},
  {id: 5.6, picture: '/assets/img/5-6.png', name: 'Twizzlers', price: '.75', info: '/assets/img/5-6-info.png'},
  {id: 5.7, picture: '/assets/img/5-7.png', name: 'White Chocolate Kit Kat', price: '.75', info: '/assets/img/5-7-info.png'},
  {id: 5.8, picture: '/assets/img/5-8.png', name: 'Reese\'s Sticks', price: '.75', info: '/assets/img/5-8-info.png'},
  {id: 5.9, picture: '/assets/img/5-9.png', name: 'Mentos Rainbow', price: '1.00', info: '/assets/img/5-9-info.png'},
]

const PRODUCTS6: Product[] = [
  {id: 6.1, picture: '/assets/img/6-1.png', name: 'Doublemint Gum', price: '.50', info: '/assets/img/6-1-info.png'},
  {id: 6.2, picture: '/assets/img/6-2.png', name: 'Juicy Fruit Gum', price: '.50', info: '/assets/img/6-2-info.png'},
  {id: 6.3, picture: '/assets/img/6-3.png', name: 'Big Red Gum', price: '.50', info: '/assets/img/6-3-info.png'},
  {id: 6.4, picture: '/assets/img/6-4.png', name: ' ', price: '.50', info: '/assets/img/6-4-info.png'},
  {id: 6.5, picture: '/assets/img/6-5.png', name: ' ', price: '.50', info: '/assets/img/6-5-info.png'},
  {id: 6.6, picture: '/assets/img/6-6.png', name: '', price: '.50', info: '/assets/img/6-6-info.png'},
  {id: 6.7, picture: '/assets/img/6-7.png', name: 'Extra Spearmint Gum', price: '.50', info: '/assets/img/6-7-info.png'},
  {id: 6.8, picture: '/assets/img/6-8.png', name: ' ', price: '.50', info: '/assets/img/6-8-info.png'},
  {id: 6.9, picture: '/assets/img/6-9.png', name: ' ', price: '1.00', info: '/assets/img/16-9-info.png'},
]

@Component({
  selector: 'app-vending',
  templateUrl: 'vending.component.html',
  styleUrls: ['vending.component.css'],
})


export class VendingComponent {
  products1 = PRODUCTS1;
  products2 = PRODUCTS2;
  products3 = PRODUCTS3;
  products4 = PRODUCTS4;
  products5 = PRODUCTS5;
  products6 = PRODUCTS6;
  selectedProduct: any = {};
  onSelect(product: Product): void {
    this.selectedProduct = product;
    let modal = document.getElementById('modal');
    modal.style.visibility = 'true';
    console.log(this.selectedProduct)
  }

  iframe: any;
  constructor() {

    let size = document.body.getAttribute('outerHeight');
    console.log(size)
  }
}
