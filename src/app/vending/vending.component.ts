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
  {id: 1.1, picture: '/assets/img/Vending/products/1-1.png',
    name: 'Pepsi', price: '1.50', info: '/assets/img/Vending/product_info/1-1-info.png'},
  {id: 1.2, picture: '/assets/img/Vending/products/1-2.png',
    name: 'Diet Pepsi', price: '1.50', info: '/assets/img/Vending/product_info/1-2-info.png'},
  {id: 1.3, picture: '/assets/img/Vending/products/1-3.png',
    name: 'Mountain Dew', price: '1.50', info: '/assets/img/Vending/product_info/1-3-info.png'},
  {id: 1.4, picture: '/assets/img/Vending/products/1-4.png',
    name: 'Diet Mountain Dew', price: '1.50', info: '/assets/img/Vending/product_info/1-4-info.png'},
  {id: 1.5, picture: '/assets/img/Vending/products/1-5.png',
    name: 'Mist Twist', price: '1.50', info: '/assets/img/Vending/product_info/1-5-info.png'},
  {id: 1.6, picture: '/assets/img/Vending/products/1-6.png',
    name: 'Diet Mist Twist', price: '1.50', info: '/assets/img/Vending/product_info/1-6-info.png'},
  {id: 1.7, picture: '/assets/img/Vending/products/1-7.png',
    name: 'Mug Root Beer', price: '1.50', info: '/assets/img/Vending/product_info/1-7-info.png'},
  {id: 1.8, picture: '/assets/img/Vending/products/1-8.png',
    name: 'Diet Mug Root Beer', price: '1.50', info: '/assets/img/Vending/product_info/1-8-info.png'},
]

const PRODUCTS2: Product[] = [
  {id: 2.1, picture: '/assets/img/Vending/products/2-1.png',
    name: 'Coca Cola', price: '1.50', info: '/assets/img/Vending/product_info/2-1-info.png'},
  {id: 2.2, picture: '/assets/img/Vending/products/2-2.png',
    name: 'Diet Coca Cola', price: '1.50', info: '/assets/img/Vending/product_info/2-2-info.png'},
  {id: 2.3, picture: '/assets/img/Vending/products/2-3.png',
    name: 'Mello Yello', price: '1.50', info: '/assets/img/Vending/product_info/2-3-info.png'},
  {id: 2.4, picture: '/assets/img/Vending/products/2-4.png',
    name: 'Mello Yello Zero', price: '1.50', info: '/assets/img/Vending/product_info/2-4-info.png'},
  {id: 2.5, picture: '/assets/img/Vending/products/2-5.png',
    name: 'Sprite', price: '1.50', info: '/assets/img/Vending/product_info/2-5-info.png'},
  {id: 2.6, picture: '/assets/img/Vending/products/2-6.png',
    name: 'Sprite Zero', price: '1.50', info: '/assets/img/Vending/product_info/2-6-info.png'},
  {id: 2.7, picture: '/assets/img/Vending/products/2-7.png',
    name: 'Pibb Xtra', price: '1.50', info: '/assets/img/Vending/product_info/2-7-info.png'},
  {id: 2.8, picture: '/assets/img/Vending/products/2-8.png',
    name: 'Pibb Zero', price: '1.50', info: '/assets/img/Vending/product_info/2-8-info.png'},
]

const PRODUCTS3: Product[] = [
  {id: 3.1, picture: '/assets/img/Vending/products/3-1.png',
    name: 'Aquafina', price: '1.50', info: '/assets/img/Vending/product_info/3-1-info.png'},
  {id: 3.2, picture: '/assets/img/Vending/products/3-2.png',
    name: 'Dasani', price: '1.50', info: '/assets/img/Vending/product_info/3-2-info.png'},
  {id: 3.3, picture: '/assets/img/Vending/products/3-3.png',
    name: 'Cheetos', price: '.75', info: '/assets/img/Vending/product_info/3-3-info.png'},
  {id: 3.4, picture: '/assets/img/Vending/products/3-4.png',
    name: 'Flamin` Hot Cheetohs', price: '.75', info: '/assets/img/Vending/product_info/3-4-info.png'},
  {id: 3.5, picture: '/assets/img/Vending/products/3-5.png',
    name: 'Doritos', price: '.75', info: '/assets/img/Vending/product_info/3-5-info.png'},
  {id: 3.6, picture: '/assets/img/Vending/products/3-6.png',
    name: 'Cool Ranch Doritos', price: '.75', info: '/assets/img/Vending/product_info/3-6-info.png'},
  {id: 3.7, picture: '/assets/img/Vending/products/3-7.png',
    name: 'Lay\'s Original', price: '.75', info: '/assets/img/Vending/product_info/3-7-info.png'},
  {id: 3.8, picture: '/assets/img/Vending/products/3-8.png',
    name: 'Lay\'s Sour Cream and Onion', price: '.75', info: '/assets/img/Vending/product_info/3-8-info.png'},
]

const PRODUCTS4: Product[] = [
  {id: 4.1, picture: '/assets/img/Vending/products/4-1.png',
    name: 'Fritos', price: '.75', info: '/assets/img/Vending/product_info/4-1-info.png'},
  {id: 4.2, picture: '/assets/img/Vending/products/4-2.png',
    name: 'Funyuns', price: '.75', info: '/assets/img/Vending/product_info/4-2-info.png'},
  {id: 4.3, picture: '/assets/img/Vending/products/4-3.png',
    name: 'Cracker Jack', price: '.75', info: '/assets/img/Vending/product_info/4-3-info.png'},
  {id: 4.4, picture: '/assets/img/Vending/products/4-4.png',
    name: 'Snickers', price: '.75', info: '/assets/img/Vending/product_info/4-4-info.png'},
  {id: 4.5, picture: '/assets/img/Vending/products/4-5.png',
    name: '3 Musketeers', price: '.75', info: '/assets/img/Vending/product_info/4-5-info.png'},
  {id: 4.6, picture: '/assets/img/Vending/products/4-6.png',
    name: 'Peanut M&M\'s', price: '.75', info: '/assets/img/Vending/product_info/4-6-info.png'},
  {id: 4.7, picture: '/assets/img/Vending/products/4-7.png',
    name: 'Orignal M&M\'s', price: '.75', info: '/assets/img/Vending/product_info/4-7-info.png'},
  {id: 4.8, picture: '/assets/img/Vending/products/4-8.png',
    name: 'Peanut Butter M&M\'s', price: '.75', info: '/assets/img/Vending/product_info/4-8-info.png'},
]

const PRODUCTS5: Product[] = [
  {id: 5.1, picture: '/assets/img/Vending/products/5-1.png',
    name: 'Twix', price: '.75', info: '/assets/img/Vending/product_info/5-1-info.png'},
  {id: 5.2, picture: '/assets/img/Vending/products/5-2.png',
    name: 'Butterfinger', price: '.75', info: '/assets/img/Vending/product_info/5-2-info.png'},
  {id: 5.3, picture: '/assets/img/Vending/products/5-3.png',
    name: 'Sweet Tarts', price: '.75', info: '/assets/img/Vending/product_info/5-3-info.png'},
  {id: 5.4, picture: '/assets/img/Vending/products/5-4.png',
    name: 'Skittles (Original)', price: '.75', info: '/assets/img/Vending/product_info/5-4-info.png'},
  {id: 5.5, picture: '/assets/img/Vending/products/5-5.png',
    name: 'Starburst', price: '.75', info: '/assets/img/Vending/product_info/5-5-info.png'},
  {id: 5.6, picture: '/assets/img/Vending/products/5-6.png',
    name: 'Reese\'s Peanut Butter Cups', price: '.75', info: '/assets/img/Vending/product_info/5-6-info.png'},
  {id: 5.7, picture: '/assets/img/Vending/products/5-7.png',
    name: 'Rolo', price: '.75', info: '/assets/img/Vending/product_info/5-7-info.png'},
  {id: 5.8, picture: '/assets/img/Vending/products/5-8.png',
    name: 'Twizzlers', price: '.75', info: '/assets/img/Vending/product_info/5-8-info.png'},
]

const PRODUCTS6: Product[] = [
  {id: 6.1, picture: '/assets/img/Vending/products/6-1.png',
    name: 'Kit Kat', price: '.75', info: '/assets/img/Vending/product_info/6-1-info.png'},
  {id: 6.2, picture: '/assets/img/Vending/products/6-2.png',
    name: 'White Chocolate Kit Kat', price: '.75', info: '/assets/img/Vending/product_info/6-2-info.png'},
  {id: 6.3, picture: '/assets/img/Vending/products/6-3.png',
    name: 'Reese\'s Sticks', price: '.75', info: '/assets/img/Vending/product_info/6-3-info.png'},
  {id: 6.4, picture: '/assets/img/Vending/products/6-4.png',
    name: 'Mentos Rainbow', price: '.75', info: '/assets/img/Vending/product_info/6-4-info.png'},
  {id: 6.5, picture: '/assets/img/Vending/products/6-5.png',
    name: 'Doublemint Gum', price: '.50', info: '/assets/img/Vending/product_info/6-5-info.png'},
  {id: 6.6, picture: '/assets/img/Vending/products/6-6.png',
    name: 'Juicy Fruit Gum', price: '.50', info: '/assets/img/Vending/product_info/6-6-info.png'},
  {id: 6.7, picture: '/assets/img/Vending/products/6-7.png',
    name: 'Big Red Gum', price: '.50', info: '/assets/img/Vending/product_info/6-7-info.png'},
  {id: 6.8, picture: '/assets/img/Vending/products/6-8.png',
   name: 'Extra Spearmint Gum', price: '.50', info: '/assets/img/Vending/product_info/product_info/6-8-info.png'},
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
  constructor() { }
}
