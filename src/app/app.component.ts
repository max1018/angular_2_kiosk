import { Component, ViewEncapsulation } from '@angular/core';
import {Database} from "./database.service";
import {Router} from "@angular/router";
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

  constructor(private db: Database, private router: Router) {
    db.makeDatabase();
   // console.log(db.makeDatabase())









  }

}
