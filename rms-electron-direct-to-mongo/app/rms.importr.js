"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
// import { RmsService } from './rms.service'
var rms_service_1 = require('./rms.service');
require('rxjs/add/operator/map');
var RmsImport = (function () {
    function RmsImport(rmsImportr) {
        this.rmsImportr = rmsImportr;
    }
    RmsImport.prototype.ngOnInit = function () {
        this.rmss = [];
        console.log("importr");
        this.rmss = this.rmsImportr.getRms();
        // .map(res => res.json())
        // .subscribe(rmss => this.rmss = rmss);
        // console.log(this.rmsImportr.getRms().map(res => res.json()).subscribe(rmss => this.rmss = rmss))
    };
    RmsImport.prototype.importRea = function ($event, item, importNum, onum, location) {
        console.log(item);
        console.log(item, importNum, onum);
        var x = parseInt(importNum.value);
        var y = parseInt(onum);
        x = x + y;
        var newNum = {
            item: item,
            num: x,
            location: location.value
        };
        console.log(newNum);
        this.rmsImportr.rmsImport(newNum);
        // .map(newNum => newNum.json())
        // .subscribe(newNums => newNums = newNums);
        console.log(newNum);
    };
    RmsImport = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'rms-importr',
            templateUrl: 'rms.importr.html',
            providers: [rms_service_1.RmsImportr]
        }), 
        __metadata('design:paramtypes', [rms_service_1.RmsImportr])
    ], RmsImport);
    return RmsImport;
}());
exports.RmsImport = RmsImport;
//# sourceMappingURL=rms.importr.js.map