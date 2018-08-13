import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }
  wpp(){
  window.open("https://api.whatsapp.com/send?phone=5551981281898&text=Olá!+")
  }

  faceboklink(){
    window.open("https://www.facebook.com/offtorres");
  }

}
