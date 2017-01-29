import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IstMap } from '../pages/istmap/istmap';
import { Schedule } from '../pages/schedule/schedule';
import { Announcements } from '../pages/announcements/announcements';
import { Settings } from '../pages/settings/settings';
import { Sponsors } from '../pages/sponsors/sponsors';

@NgModule({
  declarations: [
    MyApp,
    IstMap,
    Schedule,
    Announcements,
    Settings,
    Sponsors
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    IstMap,
    Schedule,
    Announcements,
    Settings,
    Sponsors
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
