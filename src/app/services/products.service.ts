import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class ProductsService {

  productsIdxUrl : string ;
  productSelected : string ;
  products : any [] = [] ;
  productsFilter: any [] = [];
  loadingProducts : boolean = false;

  constructor(private _http : Http ) {
    this.productsIdxUrl = "https://fireapp-7d8c8.firebaseio.com/products_idx.json";
    this.productSelected = "https://fireapp-7d8c8.firebaseio.com/products/";
    this.loadProducts();
  }

  /**
   * Cargar Productos
   */
  public loadProducts(){
    let promise = new Promise( (resolve, reject) => {
      this.loadingProducts = true;
      if( this.products.length === 0 ){
        this._http.get( this.productsIdxUrl )
        .subscribe( data => {

          setTimeout( ()=> {
            this.products = data.json();
            this.loadingProducts = false;
            resolve();
            // console.log( this.products );
          }, 1500 );

        }, error => {
          reject();
          this.loadingProducts = false;
          console.error('Error en Firebase Url: ' + error );

        })
      }

    });

    return promise;

  }

  public getProducto( codeProduct : string ){
    return this._http.get( this.productSelected + codeProduct + ".json" )
  }

  public findProduct( findText : string ){
    if( this.products.length === 0 ){
      this.loadProducts().then( () => {
        this.filterProducts( findText );
      })
    }else{
        this.filterProducts( findText );
    }
  }

  private filterProducts( findText : string  ){
    findText = findText.toLowerCase();
    this.productsFilter = [];

    this.products.forEach( p => {
        if( p.titulo.toLowerCase().indexOf( findText ) != -1 || p.categoria.toLowerCase().indexOf( findText ) != -1 ){
          this.productsFilter.push( p );
        }
    })
  }


}
