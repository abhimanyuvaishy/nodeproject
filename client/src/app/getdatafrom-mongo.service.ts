import { Injectable } from '@angular/core';
import {Jsonp,Response} from '@angular/http';

import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';

export class custDetail{
  constructor(public _id:any,public first_name:string,public last_name:string,public age:string,
  public designation:string,
  public Skills:Array<string>){}
}

@Injectable()
export class GetdatafromMongoService {

  constructor(private _jsonp:Jsonp) { }
  getdata(){
   return this._jsonp.request('http://localhost:3000/api/tasks?callback=JSONP_CALLBACK',{ method: 'Get' })
    .map(response => <custDetail[]> response.json());

  }
}
