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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require('rxjs/add/operator/map');
var RmsService = (function () {
    function RmsService(http) {
        this.http = http;
    }
    RmsService.prototype.getRms = function () {
        console.log("storage");
        return this.http.get('rms/display');
    };
    RmsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], RmsService);
    return RmsService;
}());
exports.RmsService = RmsService;
;
var RmsImportr = (function () {
    function RmsImportr(http) {
        this.http = http;
    }
    RmsImportr.prototype.getRms = function () {
        console.log("importr");
        return this.http.get('rms/display');
    };
    RmsImportr.prototype.rmsImport = function (newNum) {
        console.log('importr/' + newNum.item + '/' + newNum.num);
        return this.http.get('importr/' + newNum.item + '/' + newNum.num);
    };
    RmsImportr = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], RmsImportr);
    return RmsImportr;
}());
exports.RmsImportr = RmsImportr;
var RmsDict = (function () {
    function RmsDict(http) {
        this.http = http;
    }
    RmsDict.prototype.getDict = function () {
        console.log("dict");
        return this.http.get('rms/dict');
    };
    RmsDict.prototype.delDict = function (newitem) {
        console.log('dict/delete/' + newitem);
        return this.http.get('dict/delete/' + newitem);
    };
    RmsDict.prototype.addDict = function (newitem) {
        console.log('dict/add/' + newitem.item + '/' + newitem.unit + '/' + newitem.mfrs);
        return this.http.get('dict/add/' + newitem.item + '/' + newitem.unit + '/' + newitem.mfrs);
    };
    RmsDict = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], RmsDict);
    return RmsDict;
}());
exports.RmsDict = RmsDict;
var RmsExportr = (function () {
    function RmsExportr(http) {
        this.http = http;
    }
    RmsExportr.prototype.getRms = function () {
        console.log("exportr");
        return this.http.get('rms/display');
    };
    RmsExportr.prototype.rmsExport = function (newNum) {
        console.log('exportr/' + newNum.item + '/' + newNum.num);
        return this.http.get('exportr/' + newNum.item + '/' + newNum.num);
    };
    RmsExportr = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], RmsExportr);
    return RmsExportr;
}());
exports.RmsExportr = RmsExportr;
//# sourceMappingURL=rms.service.js.map