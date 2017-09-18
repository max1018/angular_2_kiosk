import {Component} from '@angular/core';

export class Product {
  id: number;
  picture: string;
  name: string;
  price: string;
}

const PRODUCTS1: Product[] = [
  {id: 1.1, picture: '/assets/img/1-1.png', name: 'Pepsi', price: '1.50'},
  {id: 1.2, picture: '/assets/img/1-2.png', name: 'Diet Pepsi', price: '1.50'},
  {id: 1.3, picture: '/assets/img/1-3.png', name: 'Mountain Dew', price: '1.50'},
  {id: 1.4, picture: '/assets/img/1-4.png', name: 'Diet Mountain Dew', price: '1.50'},
  {id: 1.5, picture: '/assets/img/1-5.png', name: 'Sierra Mist', price: '1.50'},
  {id: 1.6, picture: '/assets/img/1-6.png', name: 'Aquafina', price: '1.50'},
  {id: 1.7, picture: '/assets/img/1-7.png', name: 'Dr. Pepper', price: '1.50'},
  {id: 1.8, picture: '/assets/img/1-8.png', name: 'Diet Dr. Pepper', price: '1.50'},
  {id: 1.9, picture: '/assets/img/1-9.png', name: 'Powder Sugar Donettes', price: '1.50'},

]

const PRODUCTS2: Product[] = [
  {id: 2.1, picture: '/assets/img/2-1.png', name: 'Coca Cola', price: '1.50'},
  {id: 2.2, picture: '/assets/img/2-2.png', name: 'Diet Coca Cola', price: '1.50'},
  {id: 2.3, picture: '/assets/img/2-3.png', name: 'Mello Yello', price: '1.50'},
  {id: 2.4, picture: '/assets/img/2-4.png', name: 'Sprite', price: '1.50'},
  {id: 2.5, picture: '/assets/img/2-5.png', name: 'Dasani', price: '1.50'},
  {id: 2.6, picture: '/assets/img/2-6.png', name: 'Mr. Pibb', price: '1.50'},
  {id: 2.7, picture: '/assets/img/2-7.png', name: 'Diet Mr. Pibb', price: '1.50'},
  {id: 2.8, picture: '/assets/img/2-8.png', name: 'Barqs Root Beer', price: '1.50'},
  {id: 2.9, picture: '/assets/img/2-9.png', name: 'Smores Pop Tarts', price: '1.50'},
]

const PRODUCTS3: Product[] = [
  {id: 3.1, picture: '/assets/img/3-1.png', name: 'Cheetohs', price: '.75'},
  {id: 3.2, picture: '/assets/img/3-2.png', name: 'Doritos', price: '.75'},
  {id: 3.3, picture: '/assets/img/3-3.png', name: 'Fritos', price: '.75'},
  {id: 3.4, picture: '/assets/img/3-4.png', name: 'Lays Original', price: '.75'},
  {id: 3.5, picture: '/assets/img/3-5.png', name: 'Funyuns', price: '.75'},
  {id: 3.6, picture: '/assets/img/3-6.png', name: 'Lays Sour Cream and Onion', price: '.75'},
  {id: 3.7, picture: '/assets/img/3-7.png', name: 'Cool Ranch Doritos', price: '.75'},
  {id: 3.8, picture: '/assets/img/3-8.png', name: 'Flamin` Hot Cheetohs', price: '.75'},
  {id: 3.9, picture: '/assets/img/3-9.png', name: 'Jack Links Beef Jerky', price: '1.50'},
]

const PRODUCTS4: Product[] = [
  {id: 4.1, picture: '/assets/img/4-1.png', name: 'Snickers', price: '.75'},
  {id: 4.2, picture: '/assets/img/4-2.png', name: '3 Musketeers', price: '.75'},
  {id: 4.3, picture: '/assets/img/4-3.png', name: 'Nestle Crunch', price: '.75'},
  {id: 4.4, picture: '/assets/img/4-4.png', name: 'Twix', price: '.75'},
  {id: 4.5, picture: '/assets/img/4-5.png', name: 'Kit Kat', price: '.75'},
  {id: 4.6, picture: '/assets/img/4-6.png', name: 'Hershey`s Milk Chocolate', price: '.75'},
  {id: 4.7, picture: '/assets/img/4-7.png', name: 'Butterfinger', price: '.75'},
  {id: 4.8, picture: '/assets/img/4-8.png', name: 'Heath Bar', price: '.75'},
  {id: 4.9, picture: '/assets/img/4-9.png', name: 'Nutty Bars', price: '1.00'},
]

const PRODUCTS5: Product[] = [
  {id: 5.1, picture: '/assets/img/5-1.png', name: 'Skittles (Original)', price: '.75'},
  {id: 5.2, picture: '/assets/img/5-2.png', name: 'Starburst', price: '.75'},
  {id: 5.3, picture: '/assets/img/5-3.png', name: 'Reeses Peanut Butter Cups', price: '.75'},
  {id: 5.4, picture: '/assets/img/5-4.png', name: 'Peanut M&Ms', price: '.75'},
  {id: 5.5, picture: '/assets/img/5-5.png', name: 'Peanut Butter M&Ms', price: '.75'},
  {id: 5.6, picture: '/assets/img/5-6.png', name: '100 Grand', price: '.75'},
  {id: 5.7, picture: '/assets/img/5-7.png', name: 'Twizzlers (Cherry)', price: '.75'},
  {id: 5.8, picture: '/assets/img/5-8.png', name: 'Payday', price: '.75'},
  {id: 5.9, picture: '/assets/img/5-9.png', name: 'Oatmeal Cream Pie', price: '1.00'},
]

const PRODUCTS6: Product[] = [
  {id: 6.1, picture: '/assets/img/6-1.png', name: 'Doublemint Gum', price: '.50'},
  {id: 6.2, picture: '/assets/img/6-2.png', name: 'Juicy Fruit Gum', price: '.50'},
  {id: 6.3, picture: '/assets/img/6-3.png', name: 'Big Red Gum', price: '.50'},
  {id: 6.4, picture: '/assets/img/6-4.png', name: 'Eclipse Wintergreen Gum', price: '.50'},
  {id: 6.5, picture: '/assets/img/6-5.png', name: 'Stride Spearming Gum', price: '.50'},
  {id: 6.6, picture: '/assets/img/6-6.png', name: 'Orbit Peppermint Gum', price: '.50'},
  {id: 6.7, picture: '/assets/img/6-7.png', name: 'Extra Smooth Mint Gum', price: '.50'},
  {id: 6.8, picture: '/assets/img/6-8.png', name: 'Trident Spearmint Gum', price: '.50'},
  {id: 6.9, picture: '/assets/img/6-9.png', name: 'Asst. Jolly Ranchers', price: '1.00'},
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
