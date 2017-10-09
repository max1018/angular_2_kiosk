import { Component, ViewEncapsulation } from '@angular/core';
import {dynamoDb} from './database.service';

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
