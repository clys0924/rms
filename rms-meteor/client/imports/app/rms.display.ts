import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { Rms } from '../../../both/model/rms'
import template from './rms.display.html';
import { Storage } from '../../../both/dbconnect/dbconnect';

@Component({
  selector: 'rms-display',
  template
  // providers: [RmsService]
})
// export class AppComponent  implements OnInit{
export class RmsDisplay {
  rmss: Observable<Rms[]>;
  constructor(){
    this.rmss = Storage.find({}).zone();
  }

  // ngOnInit(){
  //   this.rmss = [];
  //   this.rmss = Storage.find({}).zone();
    // console.log("1111");
    // this.rmsService.getRms()
    // .map(res => res.json())
    // .subscribe(rmss => this.rmss = rmss);
    // console.log(this.rmsService.getRms().map(res => res.json()).subscribe(rmss => this.rmss = rmss))
  }