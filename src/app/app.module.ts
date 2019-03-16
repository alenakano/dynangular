import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentRefDirective } from './component-ref.directive';
import { HomeComposerComponent } from './home-composer/home-composer.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentRefDirective,
    HomeComposerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
