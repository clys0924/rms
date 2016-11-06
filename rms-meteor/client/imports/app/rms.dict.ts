import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { MeteorObservable } from 'meteor-rxjs';

import { Dict } from '../../../both/dbconnect/dbconnect';
import { Storage } from '../../../both/dbconnect/dbconnect';
import { Rms } from '../../../both/model/rms'
import template from './rms.dict.html'

@Component({
  // moduleId:module.id,
  selector: 'rms-dict',
  template
  // providers: [RmsDict]
})
// export class AppComponent  implements OnInit{
export class RmsDictr {
  rmss: Observable<Rms[]>;
  newItem: Rms[]
  // constructor(private rmsDict:RmsDict){}

  constructor() {
    this.rmss = Dict.find({}).zone();
  }


  deleteItem($event, item: Rms): void {
      Dict.remove(item._id)
      Storage.remove(item.item)
    }


  addItem($event, item,unit,mfrs){
      console.log("111"+item)
      console.log("add:"+item+unit+mfrs);
      var newItem = {
        item: item.value,
        unit: unit.value,
        mfrs: mfrs.value
      };
      console.log(newItem)
      Dict.insert(newItem)
      var newStr = {
        item: item.value,
        num: 0
      };
      Storage.insert(newStr)
      item.value = "";
      unit.value = "";
      mfrs.value = "";
    }
};
