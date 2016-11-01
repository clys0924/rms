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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var rms_importr_1 = require('./rms.importr');
var rms_dict_1 = require('./rms.dict');
var rms_display_1 = require('./rms.display');
var rms_exportr_1 = require('./rms.exportr');
var rms_home_1 = require('./rms.home');
// @NgModule({
//   imports:      [ BrowserModule, FormsModule, HttpModule ],
//   declarations: [ AppComponent, RmsImport, RmsDictr ],
//   // bootstrap:    [ AppComponent, RmsImport, RmsDictr ]
//   // bootstrap:    [ RmsImport ]
//   bootstrap:    [ RmsDictr ]
//   // bootstrap:    [ AppComponent ]
// })
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot([
                    { path: 'importr', component: rms_importr_1.RmsImport },
                    { path: 'dict', component: rms_dict_1.RmsDictr },
                    { path: 'display', component: rms_display_1.RmsDisplay },
                    { path: 'exportr', component: rms_exportr_1.RmsExport },
                    { path: '', component: rms_home_1.RmsHome }
                ])
            ],
            declarations: [app_component_1.AppComponent, rms_importr_1.RmsImport, rms_dict_1.RmsDictr, rms_display_1.RmsDisplay, rms_exportr_1.RmsExport, rms_home_1.RmsHome],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map