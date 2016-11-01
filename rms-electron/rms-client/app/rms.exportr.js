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
var RmsExport = (function () {
    function RmsExport(rmsExportr) {
        this.rmsExportr = rmsExportr;
    }
    RmsExport.prototype.ngOnInit = function () {
        var _this = this;
        this.rmss = [];
        console.log("Exportr");
        this.rmsExportr.getRms()
            .map(function (res) { return res.json(); })
            .subscribe(function (rmss) { return _this.rmss = rmss; });
        console.log(this.rmsExportr.getRms().map(function (res) { return res.json(); }).subscribe(function (rmss) { return _this.rmss = rmss; }));
    };
    RmsExport.prototype.exportRea = function ($event, item, exportNum, onum) {
        console.log(item);
        console.log(item, exportNum, onum);
        var x = parseInt(exportNum.value);
        var y = parseInt(onum);
        if (x > y) {
            x = y;
        }
        else {
            x = y - x;
        }
        var newNum = {
            item: item,
            num: x
        };
        console.log(newNum);
        this.rmsExportr.rmsExport(newNum)
            .map(function (newNum) { return newNum.json(); })
            .subscribe(function (newNums) { return newNums = newNums; });
        console.log(newNum);
    };
    RmsExport = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'rms-exportr',
            templateUrl: 'rms.exportr.html',
            providers: [rms_service_1.RmsExportr]
        }), 
        __metadata('design:paramtypes', [rms_service_1.RmsExportr])
    ], RmsExport);
    return RmsExport;
}());
exports.RmsExport = RmsExport;
//# sourceMappingURL=rms.exportr.js.map