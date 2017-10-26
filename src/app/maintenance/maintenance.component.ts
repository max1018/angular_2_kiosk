import {Component } from '@angular/core';
import {Router} from '@angular/router';
import {db} from '../database.service';


@Component({
  selector: 'app-vending',
  templateUrl: 'maintenance.component.html',
  styleUrls: ['maintenance.component.css'],
})


export class MaintenanceComponent {

  constructor(private _router:Router){}

  onSubmit(login){
    console.log(login.value);
    this._router.navigate(['maintenance/update']);
  }

  back(){
    this._router.navigate(['']);
  }
}

