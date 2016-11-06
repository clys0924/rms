import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { Rms } from '../../../both/model/rms'
import template from './rms.importr.html';
import { Storage } from '../../../both/dbconnect/dbconnect';

@Component({
  selector: 'rms-importr',
  template
})
export class RmsImport {
  rmss: Observable<Rms[]>;
  constructor(){
    this.rmss = Storage.find({}).zone();
  }

  importRea($event,item,importNum,onum,location,id){
    console.log(item)
    console.log(item,importNum,onum)
    var x = parseInt(importNum.value)
    var y = parseInt(onum)
    x = x + y
    var newNum = {
      _id: id,
      item: item,
      num: x,
      location: location.value
    };
      console.log(newNum.item,newNum.num,newNum.location);
      Storage.update(newNum._id,{$set:{num:newNum.num,location: newNum.location}});
   
    // Parties.update(this.party._id, {$set: {name: this.party.name,description: this.party.description,location: this.party.location}});
      importNum.value = "";
      location.value = "";
      console.log(newNum)
    }
}