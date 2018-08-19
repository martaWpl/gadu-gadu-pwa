import { Component, ViewChild } from '@angular/core';
import {Platform, Nav, NavOptions} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GaduGaduPage } from '../pages/gadu-gadu/gadu-gadu';

export const statusList = [
  {name: 'Dostępny', imgSrc: '../../assets/img/dostepny.png'},
  {name: 'Niedostępny', imgSrc: '../../assets/img/niedostepny.png'},
  {name: 'Pogadam', imgSrc: '../../assets/img/pogadam.png'},
  {name: 'Niewidoczny', imgSrc: '../../assets/img/niewidoczny.png'},
  {name: 'Zaraz wracam', imgSrc: '../../assets/img/zaraz-wracam.png'},
  {name: 'Nie przeszkadzać', imgSrc: '../../assets/img/nie-przeszkadzac.png'},
];

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = GaduGaduPage;
    public statusList = statusList;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  changeUserStatus(newStatus) {
    let options = {
      status: newStatus.name,
    };
    this.navCtrl.popToRoot(<NavOptions>options);
  }
}
