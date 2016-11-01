import { Component, OnInit } from '@angular/core';
import { RmsService } from './rms.service'
import { RmsImportr } from './rms.service'
import 'rxjs/add/operator/map'
import { Rms } from './rms'


@Component({
  moduleId:module.id,
  selector: 'rms-display',
  templateUrl: 'rms.display.html',
  providers: [RmsService]
})
// export class AppComponent  implements OnInit{
export class RmsDisplay {
  rmss: Rms[];
  constructor(private rmsService:RmsService){}

  ngOnInit(){
    this.rmss = [];
    console.log("1111");
    this.rmsService.getRms()
    .map(res => res.json())
    .subscribe(rmss => this.rmss = rmss);
    console.log(this.rmsService.getRms().map(res => res.json()).subscribe(rmss => this.rmss = rmss))
  }
};