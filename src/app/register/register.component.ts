import { Component, OnInit } from '@angular/core';
import {PersistenceService, StorageType} from "angular-persistence";
import {UUID} from 'angular2-uuid';

'use strict'
var AWS = require('aws-sdk');
import {DynamoDB} from 'aws-sdk';
import {Config} from 'aws-sdk'

var myCredentials = new AWS.CognitoIdentityCredentials({IdentityPoolId: 'us-east-2_ptjPC8qtX'});
var myConfig = new Config({credentials: myCredentials, region: 'us-east-2'});
//

AWS.config.update({
  accessKeyId: 'AKIAIF2YWPBYXUNIVQWA',
  secretAccessKey: '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',
  region: 'us-east-2'
});


const dynamoDb = new DynamoDB.DocumentClient();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {
  generateSafeId = require('generate-safe-id')





  constructor(private _perService: PersistenceService) {
    // dynamoDb.
 // console.log(uuid)
  }



  ngOnInit() {
  }

  printHey(){
    let uuid = UUID.UUID();
    this._perService.set('accessKey',uuid, {type: StorageType.LOCAL});
  }

  getHey(){
    console.log(this._perService.get('accessKey', StorageType.LOCAL));
  }

}
