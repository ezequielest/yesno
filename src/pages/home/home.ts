import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { YesnoProvider } from '../../providers/yesno/yesno';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  oResultado: any;
  answer: string = "MMM";
  imagen: string = "";
  imgCargada:boolean = false;
  visibilidad:string = "none";
  fade:string ="fadeIn";
  seg:number = 0;
  imagenesCargadas:any = [];
  contador:any;


  constructor(
    public navCtrl: NavController,
    private _yesno:YesnoProvider,
    //private screenOrientation: ScreenOrientation
  ) {
    //this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    this.obtenerResultado();
  }

  obtenerResultado(){
    this.fade = "fadeOut";
    this.visibilidad = "none";
    this.imgCargada = false;

    this._yesno.consumirApi().subscribe(
      result => {
        this.oResultado = result;
        this.seg = 3;

            
            if (this.imagenesCargadas.indexOf(this.oResultado.image) === -1){
                this.imagen = this.oResultado.image;
                this.imagenesCargadas.push(this.oResultado.image);
                this.answer = this.oResultado.answer;
            }else{

              this.contador = setInterval(()=>{
                this.seg -= 1;
                console.log(this.seg);
                if(this.seg == 0){
                  
                  this.imgCargada = true;
                  this.visibilidad = "block";
                  this.fade = "fadeIn";

                  clearInterval(this.contador);

                  return this.imgCargada;
                }
              },1000);
            }

        
      }
    );
  }

  imagenCargada(){
    this.imgCargada = true;
    this.visibilidad = "block";
    this.fade = "fadeIn";
    return this.imgCargada;
  }

}