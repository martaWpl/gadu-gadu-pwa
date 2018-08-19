import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {statusList} from "../../app/app.component";
import {MessagePage} from "../message/message";

@Component({
  selector: 'page-gadu-gadu',
  templateUrl: 'gadu-gadu.html'
})
export class GaduGaduPage {

  user: any = {
    name: 'Marta W',
    description: 'szczęśliwa',
    imgSrc: 'assets/img/myAvatar.png',
    status: 'dostepny',
    nrGG: 9364234,
  };

  users = [
    {
      name: 'Karolina K',
      description: 'Ktoś na rower?',
      imgSrc: 'assets/img/karolina.png',
      status: 'pogadam',
      nrGG: 9364234,
    },
    {
      name: 'Michał N',
      description: 'Ciężki dzień w szkole :/',
      imgSrc: 'assets/img/michal.png',
      status: 'zaraz-wracam',
      nrGG: 93642311,
    },
    {
      name: 'Grzegorz G',
      description: 'relaks na działeczce',
      imgSrc: 'assets/img/grzegorz.png',
      status: 'niedostepny',
      nrGG: 9364233,
    }
  ];
  private opened: boolean;
  private newDescription: string;


  constructor(public navCtrl: NavController, private  navParams: NavParams) {
      this.opened = false;
  }

  openForm() {
    this.opened = true;
  }

  changeDescription() {
    this.user.description = this.newDescription;
    this.opened = false;
  }
  onPageWillEnter() {
    console.log('onPageWillEnter');
  }

  ionViewDidEnter() {
    let status = this.navParams.get('status');
    if(status) {
      console.log(status);
      this.user.status = status.toLowerCase().replace(' ', '-');
      console.log(this.user);
    }
  }

  onViewWillEnter() {
    console.log('onViewWillEnter');
    this.navParams.get('status')
      .then(value => {console.log('mam status', value);});
    console.log(this.navParams.get('status'));
    if (this.navParams.get('status')) {
      let status = this.navParams.get('status');
      this.user.status = status.toLowerCase().replace(' ', '-');
      console.log(this.user);
      //this.user.status =
    }
  }

  openMessagePage(friend: { name: string; description: string; imgSrc: string; status: string; nrGG: number }) {
    this.navCtrl.push(MessagePage,{user: friend} );
  }
}

