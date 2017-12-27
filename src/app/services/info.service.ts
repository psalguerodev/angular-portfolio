import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class InfoService {

  infoPage : any = {};
  loaded   : boolean = false;

  constructor( private _http: Http ) {
    this._http.get('assets/data/info.page.json')
              .subscribe( data => {
                this.infoPage = data.json();
                this.loaded = true;
              })
  }

  getInfoPage(){
    return this.infoPage;
  }

}
