import { Component,OnInit } from '@angular/core';
import{GetdatafromMongoService} from './getdatafrom-mongo.service';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private _data:GetdatafromMongoService){}
  title = 'app works!';
  heroes:any[];
  errorMessage: string;
  items: Observable<string[]>;

  ngOnInit(){
  console.log( this._data.getdata());
  }
}
