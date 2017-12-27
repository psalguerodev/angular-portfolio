import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  findText : string = undefined;

  constructor(
    public _productServices : ProductsService,
    public _actRoute : ActivatedRoute
  ) {

    this._actRoute.params.subscribe( params => {
      this.findText = params['find'];

      this._productServices.findProduct( this.findText );

    })
  }



}
