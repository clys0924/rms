import { Component, OnInit } from '@angular/core';
// import { RmsService } from './rms.service'
import { RmsImportr } from './rms.service'
import 'rxjs/add/operator/map'
import { Rms } from './rms'

@Component({
  moduleId:module.id,
  selector: 'rms-importr',
  templateUrl: 'rms.importr.html',
  providers: [RmsImportr]
})
// export class AppComponent  implements OnInit{
export class RmsImport {
  rmss: Rms[];
  constructor(private rmsImportr:RmsImportr){}

  ngOnInit(){
    this.rmss = [];
    console.log("importr");
    this.rmsImportr.getRms()
    .map(res => res.json())
    .subscribe(rmss => this.rmss = rmss);
    console.log(this.rmsImportr.getRms().map(res => res.json()).subscribe(rmss => this.rmss = rmss))
  }


  importRea($event,item,importNum,onum){
    console.log(item)
    console.log(item,importNum,onum)
    var x = parseInt(importNum.value)
    var y = parseInt(onum)
    x = x + y
    var newNum = {
      item: item,
      num: x
    };
      console.log(newNum);
      this.rmsImportr.rmsImport(newNum)
      .map(newNum => newNum.json())
      .subscribe(newNums => newNums = newNums);
          

      console.log(newNum)
    }
}