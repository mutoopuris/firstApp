import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashComponent } from './dashboard.component';
import { ProductComponent } from './products/product.component';

@NgModule({

  // All the component & pipe
  declarations: [
    AppComponent,
    DashComponent,
    ProductComponent
  ],

  // contain all the module
  imports: [
    BrowserModule
  ],

  // All Services are declare here
  providers: [],

  // Only first/Main component
  bootstrap: [AppComponent]
})
export class AppModule {

}
