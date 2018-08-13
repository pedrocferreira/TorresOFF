import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaPostosPage } from './lista-postos';

@NgModule({
  declarations: [
    ListaPostosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaPostosPage),
  ],
})
export class ListaPostosPageModule {}
