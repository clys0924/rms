import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { Rms } from '../../../both/model/rms'
import template from './rms.exportr.html';
import { Storage } from '../../../both/dbconnect/dbconnect';

@Component({
  selector: 'rms-exportr',
  template
})

export class RmsExport {
  rmss: Observable<Rms[]>;
  constructor(){
    this.rmss = Storage.find({}).zone();
  }


  exportRea($event,item,exportNum,onum,id){
    console.log(item)
    console.log(item,exportNum,onum)
    var x = parseInt(exportNum.value)
    var y = parseInt(onum)
    exportNum.value = ""
    if(x > y){
      x = y;
      alert("出库量超出库存")
    } else {
      x = y - x;
    }
    var newNum = {
      _id: id,
      item: item,
      num: x
    };
      console.log(newNum);
      Storage.update(newNum._id,{$set:{num:newNum.num}});
    }
}