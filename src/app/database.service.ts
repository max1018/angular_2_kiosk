import { Injectable } from '@angular/core'

// import entire SDK
'use strict'

import * as uuid from 'uuid'

// var AWS = require('aws-sdk');
// import { DynamoDB } from 'aws-sdk';
// import { Config } from 'aws-sdk'
//
// var myCredentials = new AWS.CognitoIdentityCredentials({IdentityPoolId:'us-east-1_2upZUbvBf'});
// var myConfig = new Config({credentials: myCredentials, region: 'us-east-1'});
//
// AWS.config.update({
//   accessKeyId: 'AKIAILME5HFWXOIQJF4Q',
//   secretAccessKey: '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',
//   region: 'us-east-1'
// });
let db: any = {
  items:{
    PRODUCTS1:[
      {id: 0, location:1.1, picture: '/assets/img/Vending/products/1-1.png', count: 10,
        name: 'Pepsi', price: '1.50', info: '/assets/img/Vending/product_info/1-1-info.png'},
      {id: 1, location: 1.2, picture: '/assets/img/Vending/products/1-2.png', count: 10,
        name: 'Diet Pepsi', price: '1.50', info: '/assets/img/Vending/product_info/1-2-info.png'},
      {id: 2, location: 1.3, picture: '/assets/img/Vending/products/1-3.png', count: 10,
        name: 'Mountain Dew', price: '1.50', info: '/assets/img/Vending/product_info/1-3-info.png'},
      {id: 3, location: 1.4, picture: '/assets/img/Vending/products/1-4.png', count: 10,
        name: 'Diet Mountain Dew', price: '1.50', info: '/assets/img/Vending/product_info/1-4-info.png'},
      {id: 4, location: 1.5, picture: '/assets/img/Vending/products/1-5.png', count: 10,
        name: 'Mist Twist', price: '1.50', info: '/assets/img/Vending/product_info/1-5-info.png'},
      {id: 5, location: 1.6, picture: '/assets/img/Vending/products/1-6.png', count: 10,
        name: 'Diet Mist Twist', price: '1.50', info: '/assets/img/Vending/product_info/1-6-info.png'},
      {id: 6, location: 1.7, picture: '/assets/img/Vending/products/1-7.png', count: 10,
        name: 'Mug Root Beer', price: '1.50', info: '/assets/img/Vending/product_info/1-7-info.png'},
      {id: 7, location: 1.8, picture: '/assets/img/Vending/products/1-8.png', count: 10,
        name: 'Diet Mug Root Beer', price: '1.50', info: '/assets/img/Vending/product_info/1-8-info.png'},
    ],
    PRODUCTS2: [
      {id: 8, location: 2.1, picture: '/assets/img/Vending/products/2-1.png', count: 10,
        name: 'Coca Cola', price: '1.50', info: '/assets/img/Vending/product_info/2-1-info.png'},
      {id: 9, location: 2.2, picture: '/assets/img/Vending/products/2-2.png', count: 10,
        name: 'Diet Coca Cola', price: '1.50', info: '/assets/img/Vending/product_info/2-2-info.png'},
      {id: 10, location: 2.3, picture: '/assets/img/Vending/products/2-3.png', count: 10,
        name: 'Mello Yello', price: '1.50', info: '/assets/img/Vending/product_info/2-3-info.png'},
      {id: 11, location: 2.4, picture: '/assets/img/Vending/products/2-4.png', count: 10,
        name: 'Mello Yello Zero', price: '1.50', info: '/assets/img/Vending/product_info/2-4-info.png'},
      {id: 12, location: 2.5, picture: '/assets/img/Vending/products/2-5.png', count: 10,
        name: 'Sprite', price: '1.50', info: '/assets/img/Vending/product_info/2-5-info.png'},
      {id: 13, location: 2.6, picture: '/assets/img/Vending/products/2-6.png', count: 10,
        name: 'Sprite Zero', price: '1.50', info: '/assets/img/Vending/product_info/2-6-info.png'},
      {id: 14, location: 2.7, picture: '/assets/img/Vending/products/2-7.png', count: 10,
        name: 'Pibb Xtra', price: '1.50', info: '/assets/img/Vending/product_info/2-7-info.png'},
      {id: 15, location: 2.8, picture: '/assets/img/Vending/products/2-8.png', count: 10,
        name: 'Pibb Zero', price: '1.50', info: '/assets/img/Vending/product_info/2-8-info.png'},
    ],
    PRODUCTS3: [
      {id: 16, location: 3.1, picture: '/assets/img/Vending/products/3-1.png', count: 10,
        name: 'Aquafina', price: '1.50', info: '/assets/img/Vending/product_info/3-1-info.png'},
      {id: 17, location: 3.2, picture: '/assets/img/Vending/products/3-2.png', count: 10,
        name: 'Dasani', price: '1.50', info: '/assets/img/Vending/product_info/3-2-info.png'},
      {id: 18, location: 3.3, picture: '/assets/img/Vending/products/3-3.png', count: 10,
        name: 'Cheetos', price: '.75', info: '/assets/img/Vending/product_info/3-3-info.png'},
      {id: 19, location: 3.4, picture: '/assets/img/Vending/products/3-4.png', count: 10,
        name: 'Flamin` Hot Cheetohs', price: '.75', info: '/assets/img/Vending/product_info/3-4-info.png'},
      {id: 20, location: 3.5, picture: '/assets/img/Vending/products/3-5.png', count: 10,
        name: 'Doritos', price: '.75', info: '/assets/img/Vending/product_info/3-5-info.png'},
      {id: 21, location: 3.6, picture: '/assets/img/Vending/products/3-6.png', count: 10,
        name: 'Cool Ranch Doritos', price: '.75', info: '/assets/img/Vending/product_info/3-6-info.png'},
      {id: 22, location: 3.7, picture: '/assets/img/Vending/products/3-7.png', count: 10,
        name: 'Lay\'s Original', price: '.75', info: '/assets/img/Vending/product_info/3-7-info.png'},
      {id: 23, location: 3.8, picture: '/assets/img/Vending/products/3-8.png', count: 10,
        name: 'Lay\'s Sour Cream and Onion', price: '.75', info: '/assets/img/Vending/product_info/3-8-info.png'},
    ],
    PRODUCTS4: [
      {id: 24, location: 4.1, picture: '/assets/img/Vending/products/4-1.png', count: 10,
        name: 'Fritos', price: '.75', info: '/assets/img/Vending/product_info/4-1-info.png'},
      {id: 25, location: 4.2, picture: '/assets/img/Vending/products/4-2.png', count: 10,
        name: 'Funyuns', price: '.75', info: '/assets/img/Vending/product_info/4-2-info.png'},
      {id: 26, location: 4.3, picture: '/assets/img/Vending/products/4-3.png', count: 10,
        name: 'Cracker Jack', price: '.75', info: '/assets/img/Vending/product_info/4-3-info.png'},
      {id: 27, location: 4.4, picture: '/assets/img/Vending/products/4-4.png', count: 10,
        name: 'Snickers', price: '.75', info: '/assets/img/Vending/product_info/4-4-info.png'},
      {id: 28, location: 4.5, picture: '/assets/img/Vending/products/4-5.png', count: 10,
        name: '3 Musketeers', price: '.75', info: '/assets/img/Vending/product_info/4-5-info.png'},
      {id: 29, location: 4.6, picture: '/assets/img/Vending/products/4-6.png', count: 10,
        name: 'Peanut M&M\'s', price: '.75', info: '/assets/img/Vending/product_info/4-6-info.png'},
      {id: 30, location: 4.7, picture: '/assets/img/Vending/products/4-7.png', count: 10,
        name: 'Orignal M&M\'s', price: '.75', info: '/assets/img/Vending/product_info/4-7-info.png'},
      {id: 31, location: 4.8, picture: '/assets/img/Vending/products/4-8.png', count: 2,
        name: 'Peanut Butter M&M\'s', price: '.75', info: '/assets/img/Vending/product_info/4-8-info.png'},
    ],
    PRODUCTS5: [
      {id: 32, location: 5.1, picture: '/assets/img/Vending/products/5-1.png', count: 10,
        name: 'Twix', price: '.75', info: '/assets/img/Vending/product_info/5-1-info.png'},
      {id: 33, location: 5.2, picture: '/assets/img/Vending/products/5-2.png', count: 10,
        name: 'Butterfinger', price: '.75', info: '/assets/img/Vending/product_info/5-2-info.png'},
      {id: 34, location: 5.3, picture: '/assets/img/Vending/products/5-3.png', count: 10,
        name: 'Sweet Tarts', price: '.75', info: '/assets/img/Vending/product_info/5-3-info.png'},
      {id: 35, location:  5.4, picture: '/assets/img/Vending/products/5-4.png', count: 10,
        name: 'Skittles (Original)', price: '.75', info: '/assets/img/Vending/product_info/5-4-info.png'},
      {id: 36, location: 5.5, picture: '/assets/img/Vending/products/5-5.png', count: 10,
        name: 'Starburst', price: '.75', info: '/assets/img/Vending/product_info/5-5-info.png'},
      {id: 37, location: 5.6, picture: '/assets/img/Vending/products/5-6.png', count: 10,
        name: 'Reese\'s Peanut Butter Cups', price: '.75', info: '/assets/img/Vending/product_info/5-6-info.png'},
      {id: 38, location: 5.7, picture: '/assets/img/Vending/products/5-7.png', count: 10,
        name: 'Rolo', price: '.75', info: '/assets/img/Vending/product_info/5-7-info.png'},
      {id: 39, location: 5.8, picture: '/assets/img/Vending/products/5-8.png', count: 10,
        name: 'Twizzlers', price: '.75', info: '/assets/img/Vending/product_info/5-8-info.png'},
    ],
    PRODUCTS6: [
      {id: 40, location: 6.1, picture: '/assets/img/Vending/products/6-1.png', count: 10,
        name: 'Kit Kat', price: '.75', info: '/assets/img/Vending/product_info/6-1-info.png'},
      {id: 41, location: 6.2, picture: '/assets/img/Vending/products/6-2.png', count: 10,
        name: 'White Chocolate Kit Kat', price: '.75', info: '/assets/img/Vending/product_info/6-2-info.png'},
      {id: 42, location: 6.3, picture: '/assets/img/Vending/products/6-3.png', count: 10,
        name: 'Reese\'s Sticks', price: '.75', info: '/assets/img/Vending/product_info/6-3-info.png'},
      {id: 43, location: 6.4, picture: '/assets/img/Vending/products/6-4.png', count: 10,
        name: 'Mentos Rainbow', price: '.75', info: '/assets/img/Vnding/product_info/6-4-info.png'},
      {id: 44, location: 6.5, picture: '/assets/img/Vending/products/6-5.png', count: 10,
        name: 'Doublemint Gum', price: '.50', info: '/assets/img/Vending/product_info/6-5-info.png'},
      {id: 45, location: 6.6, picture: '/assets/img/Vending/products/6-6.png', count: 10,
        name: 'Juicy Fruit Gum', price: '.50', info: '/assets/img/Vending/product_info/6-6-info.png'},
      {id: 46, location: 6.7, picture: '/assets/img/Vending/products/6-7.png', count: 10,
        name: 'Big Red Gum', price: '.50', info: '/assets/img/Vending/product_info/6-7-info.png'},
      {id: 47, location: 6.8, picture: '/assets/img/Vending/products/6-8.png', count: 10,
        name: 'Extra Spearmint Gum', price: '.50', info: '/assets/img/Vending/product_info/product_info/6-8-info.png'},
    ]
  },
  ads:{

  }
}

//const dynamoDb = new DynamoDB.DocumentClient();
@Injectable()
export class Database {}


//export { dynamoDb }
export {db}
