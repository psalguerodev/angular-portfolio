import { Component } from '@angular/core';
import { InfoService } from '../../services/info.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    public _infoService : InfoService,
    public _router : Router ){

  }

  findProduct( findText ){
    // console.info( findText );
    this._router.navigate(['/search', findText ]);
  }

}
