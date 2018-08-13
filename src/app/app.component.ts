import { TabsPage } from './../pages/tabs/tabs';
import { IntroPage } from './../pages/intro/intro';
import { ConfigProvider } from './../providers/config/config';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { timer } from 'rxjs/observable/timer';

import { Push, PushObject, PushOptions } from '@ionic-native/push';
 


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = IntroPage;

  showSplash = true; 

  constructor(platform: Platform,
     statusBar: StatusBar,
      splashScreen: SplashScreen, 
      public push: Push,
       configProvider : ConfigProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
   

      let config = configProvider.getConfigData();
      if (config == null) {
        this.rootPage = IntroPage;
        configProvider.setConfigData(false);
      }else{
        this.rootPage = TabsPage;
      }
      
      statusBar.styleDefault();
      statusBar.backgroundColorByHexString('trasparent');
      splashScreen.hide();
      this.pushSetup();
      timer(3000).subscribe(()=> this.showSplash = false);
     
     
    });
  }

pushSetup(){
  const options: PushOptions = {
    android: {
      senderID: '997355009826'
    },
    ios: {
      alert: 'true',
      badge: true,
      sound: 'false'
    }
 
  };

  const pushObject: PushObject = this.push.init(options);


  pushObject.on('notification').subscribe((notification: any) => console.log('Received a notification', notification));

  pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));

  pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
}
  
}
