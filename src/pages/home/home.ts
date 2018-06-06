import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { YesnoProvider } from '../../providers/yesno/yesno';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  resultado: any;
  answer: string;
  imagen: string;
  imgCargada = false;


  constructor(
    public navCtrl: NavController,
    private _yesno:YesnoProvider
  ) {
    this.obtenerResultado();
  }

  obtenerResultado(){
    console.log('obteniendoData');
    this.imgCargada = false;
    this._yesno.consumirApi().subscribe(
      result => {
        this.resultado =  result;
        console.log(this.resultado)

        this.imagen = this.resultado.image;
        this.answer = this.resultado.answer;
      }
    );
  }

  imagenCargada(){
    console.log('img cargada')
    this.imgCargada = true;
    return this.imgCargada;
  }

}