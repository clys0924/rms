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
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1>\u6B22\u8FCE\u4F7F\u7528\u8BD5\u5242\u7BA1\u7406\u7CFB\u7EDF</h1>\n    <nav>\n      <a routerLink=\"/dict\" routerLinkActive='active'><button>\u5B57\u5178\u914D\u7F6E</button></a>&nbsp;&nbsp;\n      <a routerLink=\"/display\" routerLinkActive='active'><button>\u5E93\u5B58\u67E5\u8BE2</button></a>&nbsp;&nbsp;\n      <a routerLink=\"/importr\" routerLinkActive='active'><button>\u8BD5\u5242\u5165\u5E93</button></a>&nbsp;&nbsp;\n      <a routerLink=\"/exportr\" routerLinkActive='active'><button>\u8BD5\u5242\u51FA\u5E93</button></a>&nbsp;&nbsp;\n      <a routerLink=\"/\" routerLinkActive='active'><button>\u8FD4\u56DE\u4E3B\u9875</button></a>&nbsp;&nbsp;\n    </nav>\n      <router-outlet></router-outlet>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
;
//# sourceMappingURL=app.component.js.map