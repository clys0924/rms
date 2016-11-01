import { Component, OnInit } from '@angular/core';
// import { RmsService } from './rms.service'
import { RmsExportr } from './rms.service'
import 'rxjs/add/operator/map'
import { Rms } from './rms'

@Component({
  moduleId:module.id,
  selector: 'rms-exportr',
  templateUrl: 'rms.exportr.html',
  providers: [RmsExportr]
})

export class RmsExport {
  rmss: Rms[];
  constructor(private rmsExportr:RmsExportr){}

  ngOnInit(){
    this.rmss = [];
    console.log("Exportr");
    this.rmss = this.rmsExportr.getRms()
    // .map(res => res.json())
    // .subscribe(rmss => this.rmss = rmss);
    // console.log(this.rmsExportr.getRms().map(res => res.json()).subscribe(rmss => this.rmss = rmss))
  }


  exportRea($event,item,exportNum,onum){
    console.log(item)
    console.log(item,exportNum,onum)
    var x = parseInt(exportNum.value)
    var y = parseInt(onum)
    if(x > y){
      x = y
    } else {
      x = y - x
    }
    var newNum = {
      item: item,
      num: x
    };
      console.log(newNum);
      this.rmsExportr.rmsExport(newNum)
      // .map(newNum => newNum.json())
      // .subscribe(newNums => newNums = newNums);
      console.log(newNum)
    }
}