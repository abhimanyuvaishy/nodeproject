import { Component,OnInit } from '@angular/core';
import{GetdatafromMongoService,custDetail} from './getdatafrom-mongo.service';
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
  items: Observable<custDetail[]>;

  ngOnInit(){
  this.items= this._data.getdata();
}
calldata(){
  console.log(this.items);
}
}
