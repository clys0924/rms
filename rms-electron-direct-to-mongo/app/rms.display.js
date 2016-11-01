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
var RmsDisplay = (function () {
    function RmsDisplay(rmsService) {
        this.rmsService = rmsService;
    }
    RmsDisplay.prototype.ngOnInit = function () {
        this.rmss = [];
        console.log("1111");
        this.rmss = this.rmsService.getRms();
        // .map(res => res.json())
        // .subscribe(rmss => this.rmss = rmss);
        // console.log(this.rmsService.getRms().map(res => res.json()).subscribe(rmss => this.rmss = rmss))
    };
    RmsDisplay = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'rms-display',
            templateUrl: 'rms.display.html',
            providers: [rms_service_1.RmsService]
        }), 
        __metadata('design:paramtypes', [rms_service_1.RmsService])
    ], RmsDisplay);
    return RmsDisplay;
}());
exports.RmsDisplay = RmsDisplay;
;
//# sourceMappingURL=rms.display.js.map