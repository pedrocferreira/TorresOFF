import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mercado } from '../../modelos/mercados';

/*
  Generated class for the MercadosListaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MercadosListaProvider {


  constructor(public http: HttpClient) {
    
  }
  lista(){
    return this.http.get<Mercado[]>('http://apitorresofff-com.umbler.net/torresoff/mercados')
  }
  


  

}
