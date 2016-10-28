import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
// import { AboutPage } from '../pages/about/about';
// import { ContactPage } from '../pages/contact/contact';
// import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { RmsDisplay} from '../pages/display/rms.display'
import { RmsDictr } from '../pages/dict/rms.dict'
import { RmsImport } from '../pages/importr/rms.importr'
import { RmsExport } from '../pages/exportr/rms.exportr'

@NgModule({
  declarations: [
    MyApp,
    // AboutPage,
    // ContactPage,
    // HomePage,
    TabsPage,
    RmsDisplay,
    RmsDictr,
    RmsImport,
    RmsExport
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // AboutPage,
    // ContactPage,
    // HomePage,
    TabsPage,
    RmsDisplay,
    RmsDictr,
    RmsImport,
    RmsExport
  ],
  providers: []
})
export class AppModule {}
