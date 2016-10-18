import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'

import { AppComponent }   from './app.component';
import { RmsImport }   from './rms.importr';
import { RmsDictr } from './rms.dict';
import { RmsDisplay } from './rms.display';
import { RmsExport }   from './rms.exportr';
import { RmsHome } from './rms.home'
// @NgModule({
//   imports:      [ BrowserModule, FormsModule, HttpModule ],
//   declarations: [ AppComponent, RmsImport, RmsDictr ],

//   // bootstrap:    [ AppComponent, RmsImport, RmsDictr ]
//   // bootstrap:    [ RmsImport ]
//   bootstrap:    [ RmsDictr ]
//   // bootstrap:    [ AppComponent ]
// })

@NgModule({
  imports:[ 
    BrowserModule, 
    FormsModule, 
    HttpModule,
    RouterModule.forRoot([
      { path: 'importr', component: RmsImport },
      { path: 'dict', component: RmsDictr },
      { path: 'display', component: RmsDisplay },
      { path: 'exportr', component: RmsExport },
      { path: '', component: RmsHome }
    ])
  ],
  declarations: [ AppComponent, RmsImport, RmsDictr, RmsDisplay, RmsExport, RmsHome],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }