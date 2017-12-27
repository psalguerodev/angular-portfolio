import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

//Componentes
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ItemComponent } from './components/item/item.component';

//Rutas
import { APP_ROUTING } from './app.routing';

//Servicios
import { InfoService } from './services/info.service';
import { DataService } from './services/data.service';
import { ProductsService } from './services/products.service';
import { SearchComponent } from './components/search/search.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ItemComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    APP_ROUTING,
    FormsModule
  ],
  providers: [
    InfoService,
    DataService,
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
