import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormGeneratorComponent } from './form-generator/form-generator.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,FormGeneratorComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

