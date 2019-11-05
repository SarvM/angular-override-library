import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Select2Module } from "ng-select2-component";

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CustomSelect2Directive } from './custom-select2.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule, Select2Module ],
  declarations: [ AppComponent, HelloComponent, CustomSelect2Directive ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
