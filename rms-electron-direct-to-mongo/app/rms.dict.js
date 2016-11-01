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
var rms_service_1 = require('./rms.service');
require('rxjs/add/operator/map');
var RmsDictr = (function () {
    function RmsDictr(rmsDict) {
        this.rmsDict = rmsDict;
    }
    RmsDictr.prototype.ngOnInit = function () {
        this.rmss = [];
        console.log("dict");
        this.rmss = this.rmsDict.getDict();
    };
    RmsDictr.prototype.deleteItem = function ($event, item) {
        console.log("delete:" + item);
        this.rmsDict.delDict(item);
        console.log("delete: " + item + " Completed");
    };
    RmsDictr.prototype.addItem = function ($event, item, unit, mfrs) {
        console.log("111" + item);
        console.log("add:" + item + unit + mfrs);
        var newItem = {
            item: item.value,
            unit: unit.value,
            mfrs: mfrs.value
        };
        console.log(newItem);
        this.rmsDict.addDict(newItem);
        console.log("add: " + item + " Completed");
    };
    RmsDictr = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'rms-dict',
            templateUrl: 'rms.dict.html',
            providers: [rms_service_1.RmsDict]
        }), 
        __metadata('design:paramtypes', [rms_service_1.RmsDict])
    ], RmsDictr);
    return RmsDictr;
}());
exports.RmsDictr = RmsDictr;
;
//# sourceMappingURL=rms.dict.js.map