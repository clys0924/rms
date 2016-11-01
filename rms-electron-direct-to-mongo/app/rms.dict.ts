import { Component, OnInit } from '@angular/core';
import { RmsDict } from './rms.service'
import 'rxjs/add/operator/map'
import { Rms } from './rms'

@Component({
  moduleId:module.id,
  selector: 'rms-dict',
  templateUrl: 'rms.dict.html',
  providers: [RmsDict]
})

export class RmsDictr {
  rmss: Rms[];
  newItem: Rms[]
  constructor(private rmsDict:RmsDict){}

  ngOnInit(){
    this.rmss = [];
    console.log("dict");
    this.rmss = this.rmsDict.getDict()
  }


  deleteItem($event, item){
      console.log("delete:"+item);
      this.rmsDict.delDict(item)
      console.log("delete: "+item+" Completed")    
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
      this.rmsDict.addDict(newItem)
      console.log("add: "+item+" Completed")
    }
};
