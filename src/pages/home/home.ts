import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { YesnoProvider } from '../../providers/yesno/yesno';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  resultado: any;
  answer: string = "MMM";
  imagen: string = "";
  imgCargada:boolean = false;
  visibilidad:string = "none";
  fade:string ="fadeIn";


  constructor(
    public navCtrl: NavController,
    private _yesno:YesnoProvider
  ) {
    this.obtenerResultado();
  }

  obtenerResultado(){
    this.fade = "fadeOut";
    this.visibilidad = "none";
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
    this.visibilidad = "block";
    this.fade = "fadeIn";
    return this.imgCargada;
  }

}