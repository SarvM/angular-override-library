import { Component } from '@angular/core';
import { sampleData } from './app.data';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  sampleData = sampleData;

  onClick(event: any){
    //console.log(event);
  }

  openKey(event: any) {
   // console.log(event);
  }
}
