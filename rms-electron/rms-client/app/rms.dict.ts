import { Component, OnInit } from '@angular/core';
// import { RmsService } from './rms.service'
import { RmsDict } from './rms.service'
import 'rxjs/add/operator/map'
import { Rms } from './rms'

@Component({
  moduleId:module.id,
  selector: 'rms-dict',
  templateUrl: 'rms.dict.html',
  providers: [RmsDict]
})
// export class AppComponent  implements OnInit{
export class RmsDictr {
  rmss: Rms[];
  newItem: Rms[]
  constructor(private rmsDict:RmsDict){}

  ngOnInit(){
    this.rmss = [];
    console.log("dict");
    this.rmsDict.getDict()
    .map(res => res.json())
    .subscribe(rmss => this.rmss = rmss);
    console.log(this.rmsDict.getDict().map(res => res.json()).subscribe(rmss => this.rmss = rmss))
  }


  deleteItem($event, item){
      console.log("delete:"+item);
      this.rmsDict.delDict(item)
      .map(newNum => newNum.json())
      .subscribe(newNums => newNums = newNums);
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
      .map(newNum => newNum.json())
      .subscribe(newNums => newNums = newNums);
      console.log("add: "+item+" Completed")
    }
};
