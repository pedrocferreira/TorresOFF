import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ConfigProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

let config_key_name = "config";
@Injectable()
export class ConfigProvider {


  
  private config = {
    showSlide: false 
  }

  constructor(public http: HttpClient) {
    console.log('Hello ConfigProvider Provider');
  }
  getConfigData(): any{
    return localStorage.getItem(config_key_name);


  }

  setConfigData(showSlide: boolean ){
    let config={
     showSlide : false
    };
    if(showSlide){
      config.showSlide=showSlide;
    }

      localStorage.setItem(config_key_name, JSON.stringify(config));

  }

}