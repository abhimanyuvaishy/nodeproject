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
 //dta='"data":{"first_name":"Abhimanyu","last_name":"Kumar"}';
  getdata(){
   return this._jsonp.request('http://localhost:3000/api/tasks?callback=JSONP_CALLBACK',{ method: 'Get' })
    .map(res => res.json())
      .subscribe((response) => {return response});
    // .subscribe(res => {
    //  // console.log(res.json());
    //       return res.json().results.map(item => {
    //         return new Array<custDetail>(
    //             item._id,
    //             item.first_name,
    //             item.last_name,
    //             item.age,
    //             item.designation,
    //             item.Skills,
    //         );
    //       });
    //     });
  }
}
