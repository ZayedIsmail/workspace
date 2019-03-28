import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FooNg6LibModule } from '../../../../dist/foo-ng6-lib';
import { FooLibModule } from '../../../../dist/foo-lib';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FooNg6LibModule,
    FooLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
