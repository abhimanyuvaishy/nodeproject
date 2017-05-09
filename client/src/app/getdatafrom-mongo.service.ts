import { Injectable } from '@angular/core';
import {Jsonp,Response} from '@angular/http';

export class custDetail{
  constructor(public _id:any,public first_name:string,public last_name:string,public age:string,
  public designation:string,
  public Skills:Array<string>){}
}

@Injectable()
export class GetdatafromMongoService {

  constructor(private _jsonp:Jsonp) { }

  getdata(){
    this._jsonp.request('http://localhost:3000/api/tasks?callback=JSONP_CALLBACK')
    .subscribe(res => {
      console.log(res.json());
          return res.json().results.map(item => {
            return new custDetail(
                item._id,
                item.first_name,
                item.last_name,
                item.age,
                item.designation,
                item.Skills,
            );
          });
        });
  }
}
