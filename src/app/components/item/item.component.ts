import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductsService } from '../../services/products.service';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent{

  product : any = undefined;
  code    : string = "";
  constructor(
    private _productService : ProductsService,
    private _actRoute: ActivatedRoute
  ) {

      this._actRoute.params.subscribe( params => {
        let code = params['cod'];

        if( code != null || code != undefined ){
          this.code = code;
          this._productService.getProducto( code )
            .subscribe( result => {
               this.product = result.json();
              //  console.info( this.product );
            })
        }

      })
   }



}
