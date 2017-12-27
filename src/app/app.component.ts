import { DataService } from './services/data.service';
import { InfoService } from './services/info.service';
import { ProductsService } from './services/products.service';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
      public _infoService : InfoService ,
      public _dataService : DataService ,
      public _productsService : ProductsService ){
  }

}
