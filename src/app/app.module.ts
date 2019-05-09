import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentRefDirective } from './component-ref.directive';
import { HomeComposerComponent } from './home-composer/home-composer.component';
import { Teste01Component } from './teste01/teste01.component';
import { Teste02Component } from './teste02/teste02.component';
import { Teste03Component } from './teste03/teste03.component';
import { HomeService } from './home.service';
import { TesteUnknownComponent } from './teste-unknown/teste-unknown.component';

import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    ComponentRefDirective,
    HomeComposerComponent,
    Teste01Component,
    Teste02Component,
    Teste03Component,
    TesteUnknownComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule,
  ],
  entryComponents: [Teste01Component, Teste02Component, Teste03Component, TesteUnknownComponent],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
