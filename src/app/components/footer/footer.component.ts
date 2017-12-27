import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent  {

  currentYear : number = new Date().getFullYear();
  footerTitle : string = "Patrick Salguero Portafolio";
  

}
