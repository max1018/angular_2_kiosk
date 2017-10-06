import { Component } from '@angular/core';
// import entire SDK
'use strict'

import * as uuid from 'uuid'

var AWS = require('aws-sdk');
import { DynamoDB } from 'aws-sdk';
import { Config } from 'aws-sdk'

var myCredentials = new AWS.CognitoIdentityCredentials({IdentityPoolId:'us-east-1_2upZUbvBf'});
var myConfig = new Config({credentials: myCredentials, region: 'us-east-1'});

AWS.config.update({
  accessKeyId: 'AKIAILSKUZESPRHIY6MA',
  secretAccessKey: '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',
  region: 'us-east-1'
});
const dynamoDb = new DynamoDB.DocumentClient();



@Component({
  selector: 'ads',
  templateUrl: 'ads.component.html' ,
  styleUrls: ['ads.component.css'],
})

export class AdsComponent {
  private item: any;

  constructor() {
    //this.item.id = "Max";
    let params = {
      "TableName": "Asumadu",
      "Item": {
        id: "201303190425",
        "Tags": {
          "SS": ["Update","Multiple Items","HelpMe"]
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
    }

    dynamoDb.put(params,function(err, data){
      console.log(err)
      if (err) console.log(err);
      else console.log(data);
    });
    console.log(dynamoDb);

    this.dbRead()
}
id: string = "201303190425";
dbRead(){
    console.log("DB Read Function Running");
    let params = {
      "TableName": "Asumadu",
      "KeyConditionExpression": "id =:id",
      ExpressionAttributeValues: {
        ":id":  this.id,
      }
    }
    dynamoDb.query(params).promise().then(op =>{
      console.log(op['Items']);
      }
    )
}
}

