import { ExpandableComponent } from './../../components/expandable/expandable';
import { PostosListaProvider } from './../../providers/postos-lista/postos-lista';
import { Postos } from './../../modelos/postos';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavController,  AlertController, LoadingController } from 'ionic-angular';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';


/**
 * Generated class for the ListaPostosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-lista-postos',
  templateUrl: 'lista-postos.html',
})
export class ListaPostosPage {
  public posto : Postos[]
  items= [];
  itemExpandHeight: number = 150;
  constructor(public navCtrl: NavController, private admobFree: AdMobFree,
     public http: HttpClient,
      private postosService: PostosListaProvider,
       private loadingCtrl: LoadingController,
        public alertCtrl: AlertController) {


    for (let i = 0; i < 30; i++) {
      this.items.push(this.items.length);
    }

    let loading = this.loadingCtrl.create({
      content: 'Aguarde o carragamento dos postos'
    })

    loading.present();


    this.postosService.lista()
      .subscribe(
        (posto) => {
          this.posto = posto;
          loading.dismiss();

        },
        (error: HttpErrorResponse) => {
          console.log(error);
          loading.dismiss();

          this.alertCtrl.create({
            title: 'Falha na conexão',
            subTitle: 'Não foi possivel carregar os postos, tente novamente mais tarde ',
            buttons: [
              { text: 'OK' }
            ]
          }).present();
        }
      );


  

    }


  expandItem(postos) {
  

    this.posto.map((listItem) => {

      if (postos == listItem) {
        postos.expanded = !listItem.expanded;
      } else {
        postos.expanded == false;
      }

      return listItem;

    });

  }


  ionViewDidLoad() {

    const bannerConfig: AdMobFreeBannerConfig = {
      id: 'ca-app-pub-2737682622417948/8624986329',
      isTesting: false,
      autoShow: true
    };
    this.admobFree.banner.config(bannerConfig);

    this.admobFree.banner.prepare()
      .then(() => {
        // banner Ad is ready
        // if we set autoShow to false, then we will need to call the show method here
      })
      .catch(e => console.log(e));
  }
}


