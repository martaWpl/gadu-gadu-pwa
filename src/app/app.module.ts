import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler, IonicPage} from 'ionic-angular';
import { MyApp } from './app.component';
import { GaduGaduPage } from '../pages/gadu-gadu/gadu-gadu';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {MessagePage} from "../pages/message/message";

@NgModule({
  declarations: [
    MyApp,
    GaduGaduPage,
    MessagePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GaduGaduPage,
    MessagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
