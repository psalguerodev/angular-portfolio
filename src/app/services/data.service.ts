import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class DataService {

  private urlTeam : string = "https://fireapp-7d8c8.firebaseio.com/team.json";
  public  dataTeam : any = [];

  constructor( private _http : Http ) {
    this.getDataTeam();
  }

  getDataTeam(){
    this._http.get( this.urlTeam )
      .subscribe( results => {
        this.dataTeam = results.json();
        // console.log( this.dataTeam );
      });
  }


}
