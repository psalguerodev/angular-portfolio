import { DataService } from '../../services/data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [`
    .fotoPersonal{
      border-radius: 100%;
    }
  `]
})
export class AboutComponent  {

  constructor(
    public _dataService : DataService
  ){}

}
