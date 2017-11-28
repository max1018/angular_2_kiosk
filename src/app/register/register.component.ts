import { Component, OnInit } from '@angular/core';
import {PersistenceService, StorageType} from "angular-persistence";
import {UUID} from 'angular2-uuid';
import {Observable} from 'rxjs/Observable';

'use strict'
var AWS = require('aws-sdk');
import {DynamoDB} from 'aws-sdk';
import {Config} from 'aws-sdk'
import {Router} from "@angular/router";

var myCredentials = new AWS.CognitoIdentityCredentials({IdentityPoolId: 'us-east-2_ptjPC8qtX'});
var myConfig = new Config({credentials: myCredentials, region: 'us-east-2'});
//

//Keys

const dynamoDb1 = new DynamoDB.DocumentClient();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {


accessKey:any;

isRegFlag: boolean;
  constructor(private _perService: PersistenceService, private _router:Router) {

    if(this.accessKey =_perService.get("accessKey",StorageType.LOCAL)){
      this.isRegFlag = true;
    }
    else{
      this.isRegFlag = false;
    }
  }



  ngOnInit() {
  }

  printHey(){
    let uuid = UUID.UUID();
    this._perService.set('accessKey',uuid, {type: StorageType.LOCAL});
    this.createTable();
  }

  getHey(){
    console.log(this._perService.get('accessKey', StorageType.LOCAL));
  }

  goBack(){
    this._router.navigateByUrl('maintenance/update')
  }

  createTable(){
    let params = {
      "TableName":"kiosk_a",
      "Item":{
        kiosk_id:this._perService.get('accessKey', StorageType.LOCAL),
        items:[{}]
      }
    }

    dynamoDb1.put(params,function (err,data){
      if(err)
      console.log(err)
      else
       console.log(data);
    })
  }
}
