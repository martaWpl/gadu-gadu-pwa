import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {
  private friend: any;
  messages: Array<string> = [];
  message: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidEnter() {
    this.friend = this.navParams.get("user");
    console.log(this.friend);
  }
  sendMessage(message: string) {
    this.messages.push(message);
    this.message = '';
  }



}
