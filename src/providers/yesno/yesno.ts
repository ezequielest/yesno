import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class YesnoProvider {

  yesnoUrl = "https://yesno.wtf/api/"

  constructor(public http: HttpClient) {
    console.log('Hello YesnoProvider Provider');
  }

  consumirApi(){
    return this.http.get(this.yesnoUrl);
  }

}
