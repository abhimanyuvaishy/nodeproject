import { Component,OnInit } from '@angular/core';
import{GetdatafromMongoService} from './getdatafrom-mongo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private _data:GetdatafromMongoService){}
  title = 'app works!';

  ngOnInit(){
      this._data.getdata();
  }
}
