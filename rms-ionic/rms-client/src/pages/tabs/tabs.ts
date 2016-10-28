import { Component } from '@angular/core';


import { RmsDisplay } from '../display/rms.display'
import { RmsDictr } from '../dict/rms.dict'
import { RmsImport } from '../importr/rms.importr'
import { RmsExport } from '../exportr/rms.exportr'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = RmsDictr;
  // tab2Root: any = AboutPage;
  tab2Root: any = RmsDisplay;
  tab3Root: any = RmsImport;
  tab4Root: any = RmsExport;

  constructor() {

  }
}
