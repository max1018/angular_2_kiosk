import { Component, ViewEncapsulation } from '@angular/core';
//import {dynamoDb} from './database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,

})


export class AppComponent {
  title = 'app';
  url = 'google.com'
  private item: any;

  constructor() {
    //this.item.id = "Max";
    let params = {
      "TableName": "Asumadu",
      "Item": {
        id: "201303190425",
        "Tags": {
          "SS": ["Update", "Multiple Items", "HelpMe"]
        },
        "ForumName": {
          "S": "Amazon DynamoDB"
        },
        "Message": {
          "S": "I want to update multiple items in a single call. What's the best way to do that?"
        },
        "Subject": {
          "S": "How do I update multiple items?"
        },
        "LastPostedBy": {
          "S": "fred@example.com"
        }
      },

      "Product1_1": {
        id: 1.1,
        picture: '/assets/img/Vending/products/1-1.png',
        count: 10,
        name: 'Pepsi',
        price: '1.50',
        info: '/assets/img/Vending/product_info/1-1-info.png'
      },

      "Product1_2": {
        id: 1.2,
        picture: '/assets/img/Vending/products/1-2.png',
        count: 10,
        name: 'Diet Pepsi',
        price: '1.50',
        info: '/assets/img/Vending/product_info/1-2-info.png'
      },

      "Product1_3": {
        id: 1.3,
        picture: '/assets/img/Vending/products/1-3.png',
        count: 10,
        name: 'Mountain Dew',
        price: '1.50',
        info: '/assets/img/Vending/product_info/1-3-info.png'
      },

      "Product1_4": {
        id: 1.4,
        picture: '/assets/img/Vending/products/1-4.png',
        count: 10,
        name: 'Diet Mountain Dew',
        price: '1.50',
        info: '/assets/img/Vending/product_info/1-4-info.png'
      },

      "Product1_5": {
        id: 1.5,
        picture: '/assets/img/Vending/products/1-5.png',
        count: 10,
        name: 'Mist Twist',
        price: '1.50',
        info: '/assets/img/Vending/product_info/1-5-info.png'
      },

      "Product1_6": {
        id: 1.6,
        picture: '/assets/img/Vending/products/1-6.png',
        count: 10,
        name: 'Diet Mist Twist',
        price: '1.50',
        info: '/assets/img/Vending/product_info/1-6-info.png'
      },

      "Product1_7": {
        id: 1.7,
        picture: '/assets/img/Vending/products/1-7.png',
        count: 10,
        name: 'Mug Root Beer',
        price: '1.50',
        info: '/assets/img/Vending/product_info/1-7-info.png'
      },

      "Product1_8": {
        id: 1.8,
        picture: '/assets/img/Vending/products/1-8.png',
        count: 10,
        name: 'Diet Mug Root Beer',
        price: '1.50',
        info: '/assets/img/Vending/product_info/1-8-info.png'
      },

      "Products2_1": {
        id: 2.1,
        picture: '/assets/img/Vending/products/2-1.png',
        count: 10,
        name: 'Coca Cola',
        price: '1.50',
        info: '/assets/img/Vending/product_info/2-1-info.png'
      },
      "Products2_2" : {
        id: 2.2,
        picture: '/assets/img/Vending/products/2-2.png',
        count: 10,
        name: 'Diet Coca Cola',
        price: '1.50',
        info: '/assets/img/Vending/product_info/2-2-info.png'
      },

      "Products2_3" : {
        id: 2.3,
        picture: '/assets/img/Vending/products/2-3.png',
        count: 10,
        name: 'Mello Yello',
        price: '1.50',
        info: '/assets/img/Vending/product_info/2-3-info.png'
      },

      "Products2_4" : {
        id: 2.4,
        picture: '/assets/img/Vending/products/2-4.png',
        count: 10,
        name: 'Mello Yello Zero',
        price: '1.50',
        info: '/assets/img/Vending/product_info/2-4-info.png'
      },

      "Products2_5" : {
        id: 2.5,
        picture: '/assets/img/Vending/products/2-5.png',
        count: 10,
        name: 'Sprite',
        price: '1.50',
        info: '/assets/img/Vending/product_info/2-5-info.png'
      },

      "Products2_6" : {
        id: 2.6,
        picture: '/assets/img/Vending/products/2-6.png',
        count: 10,
        name: 'Sprite Zero',
        price: '1.50',
        info: '/assets/img/Vending/product_info/2-6-info.png'
      },

      "Products2_7" : {
        id: 2.7,
        picture: '/assets/img/Vending/products/2-7.png',
        count: 10,
        name: 'Pibb Xtra',
        price: '1.50',
        info: '/assets/img/Vending/product_info/2-7-info.png'
      },

      "Products2_8" : {
        id: 2.8,
        picture: '/assets/img/Vending/products/2-8.png',
        count: 10,
        name: 'Pibb Zero',
        price: '1.50',
        info: '/assets/img/Vending/product_info/2-8-info.png'
      },

      "Products3_1" : {
        id: 3.1,
        picture: '/assets/img/Vending/products/3-1.png',
        count: 10,
        name: 'Aquafina',
        price: '1.50',
        info: '/assets/img/Vending/product_info/3-1-info.png'
      },

      "Products3_2" : {
        id: 3.2,
        picture: '/assets/img/Vending/products/3-2.png',
        count: 10,
        name: 'Dasani',
        price: '1.50',
        info: '/assets/img/Vending/product_info/3-2-info.png'
      },

      "Products3_3" : {
        id: 3.3,
        picture: '/assets/img/Vending/products/3-3.png',
        count: 10,
        name: 'Cheetos',
        price: '.75',
        info: '/assets/img/Vending/product_info/3-3-info.png'
      },

      "Products3_4" : {
        id: 3.4,
        picture: '/assets/img/Vending/products/3-4.png',
        count: 10,
        name: 'Flamin` Hot Cheetohs',
        price: '.75',
        info: '/assets/img/Vending/product_info/3-4-info.png'
      },

      "Products3_5" : {
        id: 3.5,
        picture: '/assets/img/Vending/products/3-5.png',
        count: 10,
        name: 'Doritos',
        price: '.75',
        info: '/assets/img/Vending/product_info/3-5-info.png'
      },

      "Products3_6" : {
        id: 3.6,
        picture: '/assets/img/Vending/products/3-6.png',
        count: 10,
        name: 'Cool Ranch Doritos',
        price: '.75',
        info: '/assets/img/Vending/product_info/3-6-info.png'
      },

      "Products3_7" : {
        id: 3.7,
        picture: '/assets/img/Vending/products/3-7.png',
        count: 10,
        name: 'Lay\'s Original',
        price: '.75',
        info: '/assets/img/Vending/product_info/3-7-info.png'
      },

      "Products3_8" : {
        id: 3.8,
        picture: '/assets/img/Vending/products/3-8.png',
        count: 10,
        name: 'Lay\'s Sour Cream and Onion',
        price: '.75',
        info: '/assets/img/Vending/product_info/3-8-info.png'
      },

      "Products4_1" : {
        id: 4.1,
        picture: '/assets/img/Vending/products/4-1.png',
        count: 10,
        name: 'Fritos',
        price: '.75',
        info: '/assets/img/Vending/product_info/4-1-info.png'
      },

      "Products4_2" : {
        id: 4.2,
        picture: '/assets/img/Vending/products/4-2.png',
        count: 10,
        name: 'Funyuns',
        price: '.75',
        info: '/assets/img/Vending/product_info/4-2-info.png'
      },

      "Products4_3" : {
        id: 4.3,
        picture: '/assets/img/Vending/products/4-3.png',
        count: 10,
        name: 'Cracker Jack',
        price: '.75',
        info: '/assets/img/Vending/product_info/4-3-info.png'
      },

      "Products4_4" : {
        id: 4.4,
        picture: '/assets/img/Vending/products/4-4.png',
        count: 10,
        name: 'Snickers',
        price: '.75',
        info: '/assets/img/Vending/product_info/4-4-info.png'
      },

      "Products4_5" : {
        id: 4.5,
        picture: '/assets/img/Vending/products/4-5.png',
        count: 10,
        name: '3 Musketeers',
        price: '.75',
        info: '/assets/img/Vending/product_info/4-5-info.png'
      },

      "Products4_6" : {
        id: 4.6,
        picture: '/assets/img/Vending/products/4-6.png',
        count: 10,
        name: 'Peanut M&M\'s',
        price: '.75',
        info: '/assets/img/Vending/product_info/4-6-info.png'
      },

      "Products4_7" : {
        id: 4.7,
        picture: '/assets/img/Vending/products/4-7.png',
        count: 10,
        name: 'Orignal M&M\'s',
        price: '.75',
        info: '/assets/img/Vending/product_info/4-7-info.png'
      },

      "Products4_8" : {
        id: 4.8,
        picture: '/assets/img/Vending/products/4-8.png',
        count: 2,
        name: 'Peanut Butter M&M\'s',
        price: '.75',
        info: '/assets/img/Vending/product_info/4-8-info.png'
      },

      "Products5_1" : {
        id: 5.1,
        picture: '/assets/img/Vending/products/5-1.png',
        count: 10,
        name: 'Twix',
        price: '.75',
        info: '/assets/img/Vending/product_info/5-1-info.png'
      },

      "Products5_2" : {
        id: 5.2,
        picture: '/assets/img/Vending/products/5-2.png',
        count: 10,
        name: 'Butterfinger',
        price: '.75',
        info: '/assets/img/Vending/product_info/5-2-info.png'
      },

      "Products5_3" : {
        id: 5.3,
        picture: '/assets/img/Vending/products/5-3.png',
        count: 10,
        name: 'Sweet Tarts',
        price: '.75',
        info: '/assets/img/Vending/product_info/5-3-info.png'
      },

      "Products5_4" : {
        id: 5.4,
        picture: '/assets/img/Vending/products/5-4.png',
        count: 10,
        name: 'Skittles (Original)',
        price: '.75',
        info: '/assets/img/Vending/product_info/5-4-info.png'
      },

      "Products5_5" : {
        id: 5.5,
        picture: '/assets/img/Vending/products/5-5.png',
        count: 10,
        name: 'Starburst',
        price: '.75',
        info: '/assets/img/Vending/product_info/5-5-info.png'
      },

      "Products5_6" : {
        id: 5.6,
        picture: '/assets/img/Vending/products/5-6.png',
        count: 10,
        name: 'Reese\'s Peanut Butter Cups',
        price: '.75',
        info: '/assets/img/Vending/product_info/5-6-info.png'
      },

      "Products5_7" : {
        id: 5.7,
        picture: '/assets/img/Vending/products/5-7.png',
        count: 10,
        name: 'Rolo',
        price: '.75',
        info: '/assets/img/Vending/product_info/5-7-info.png'
      },

      "Products5_8" : {
        id: 5.8,
        picture: '/assets/img/Vending/products/5-8.png',
        count: 10,
        name: 'Twizzlers',
        price: '.75',
        info: '/assets/img/Vending/product_info/5-8-info.png'
      },

      "Products6_1" : {
        id: 6.1,
        picture: '/assets/img/Vending/products/6-1.png',
        count: 10,
        name: 'Kit Kat',
        price: '.75',
        info: '/assets/img/Vending/product_info/6-1-info.png'
      },

      "Products6_2" : {
        id: 6.2,
        picture: '/assets/img/Vending/products/6-2.png',
        count: 10,
        name: 'White Chocolate Kit Kat',
        price: '.75',
        info: '/assets/img/Vending/product_info/6-2-info.png'
      },

      "Products6_3" : {
        id: 6.3,
        picture: '/assets/img/Vending/products/6-3.png',
        count: 10,
        name: 'Reese\'s Sticks',
        price: '.75',
        info: '/assets/img/Vending/product_info/6-3-info.png'
      },

      "Products6_4" : {
        id: 6.4,
        picture: '/assets/img/Vending/products/6-4.png',
        count: 10,
        name: 'Mentos Rainbow',
        price: '.75',
        info: '/assets/img/Vending/product_info/6-4-info.png'
      },

      "Products6_5" : {
        id: 6.5,
        picture: '/assets/img/Vending/products/6-5.png',
        count: 10,
        name: 'Doublemint Gum',
        price: '.50',
        info: '/assets/img/Vending/product_info/6-5-info.png'
      },

      "Products6_6" : {
        id: 6.6,
        picture: '/assets/img/Vending/products/6-6.png',
        count: 10,
        name: 'Juicy Fruit Gum',
        price: '.50',
        info: '/assets/img/Vending/product_info/6-6-info.png'
      },

      "Products6_7" : {
        id: 6.7,
        picture: '/assets/img/Vending/products/6-7.png',
        count: 10,
        name: 'Big Red Gum',
        price: '.50',
        info: '/assets/img/Vending/product_info/6-7-info.png'
      },

      "Products6_8" : {
        id: 6.8,
        picture: '/assets/img/Vending/products/6-8.png',
        count: 10,
        name: 'Extra Spearmint Gum',
        price: '.50',
        info: '/assets/img/Vending/product_info/product_info/6-8-info.png'
      },
}
    // dynamoDb.put(params,function(err, data){
    //   console.log(err)
    //   if (err) console.log(err);
    //   else console.log(data);
    // });
    // console.log(dynamoDb);
    //
    // this.dbRead()
  }
  id: string = "201303190425";


  // dbRead(){
  //   console.log("DB Read Function Running");
  //   let params = {
  //     "TableName": "Asumadu",
  //     "KeyConditionExpression": "id =:id",
  //     ExpressionAttributeValues: {
  //       ":id":  this.id,
  //     }
  //   }
  //   dynamoDb.query(params).promise().then(op =>{
  //       console.log(op['Items']);
  //     }
  //   )
  // }
}
