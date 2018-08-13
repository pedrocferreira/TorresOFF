import { Postos } from './../../modelos/postos';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable()
export class PostosListaProvider {


  constructor(public http: HttpClient) {
    
  }
  lista(){
    return this.http.get<Postos[]>('http://apitorresofff-com.umbler.net/torresoff/postos');//botar localhost aqui para testar listaPArceiors, depois dar deploy na api no umbler...ps:tem que achar o destino do deploy
  }


}
