import { PostosListaProvider } from './../providers/postos-lista/postos-lista';
import { ExpandableComponent } from './../components/expandable/expandable';

import { Push } from '@ionic-native/push';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IntroPageModule } from '../pages/intro/intro.module';
import { TabsPage } from '../pages/tabs/tabs';
import { ListaMercadosPage } from '../pages/lista-mercados/lista-mercados';
import { FolderPage } from '../pages/folder/folder';
import { AdMobFree,  } from '@ionic-native/admob-free';

import { HttpClientModule } from '@angular/common/http';
import { MercadosListaProvider } from '../providers/mercados-lista/mercados-lista';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { ParceirosListaProvider } from '../providers/parceiros-lista/parceiros-lista';
import { ListaPostosPage } from '../pages/lista-postos/lista-postos';
import { ConfigProvider } from '../providers/config/config';

@NgModule({
  declarations: [
    MyApp,
    AboutPage ,
    ContactPage,
    HomePage,
    TabsPage,
    ListaMercadosPage,
    FolderPage,
    ListaPostosPage,
    ExpandableComponent
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicImageViewerModule,
    IntroPageModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ListaMercadosPage,
    FolderPage,
    ListaPostosPage
    
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MercadosListaProvider,
    ParceirosListaProvider,
    PostosListaProvider,
    AdMobFree,
    Push,
    ConfigProvider
    
    
  ]
})
export class AppModule {}
