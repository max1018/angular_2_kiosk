import { Injectable } from '@angular/core'

// import entire SDK
'use strict'

import * as uuid from 'uuid'

var AWS = require('aws-sdk');
import { DynamoDB } from 'aws-sdk';
import { Config } from 'aws-sdk'

var myCredentials = new AWS.CognitoIdentityCredentials({IdentityPoolId:'us-east-1_2upZUbvBf'});
var myConfig = new Config({credentials: myCredentials, region: 'us-east-1'});

AWS.config.update({
  accessKeyId: 'AKIAIXCJFRQMYF4R6QYA',
  secretAccessKey: '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',
  region: 'us-east-1'
});
const dynamoDb = new DynamoDB.DocumentClient();
@Injectable()
export class Database {}

export { dynamoDb }
