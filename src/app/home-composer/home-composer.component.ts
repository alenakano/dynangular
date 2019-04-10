import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';

import { ComponentRefDirective } from '../component-ref.directive';
import { ItensHome } from '../itens-home';
import { HomeBuilder } from '../home-builder';
import { DadosComponent } from '../dados.component';

import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'home-composer',
  templateUrl: './home-composer.component.html',
  styleUrls: ['./home-composer.component.css']
})
export class HomeComposerComponent implements OnInit {

  @Input() itensHome: ItensHome[];
  @ViewChild(ComponentRefDirective) homeRef: ComponentRefDirective;

  public homeBuilder: ItensHome[];

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
  }

  ngOnDestroy() {
  }

  loadComponent() {

    if (this.homeBuilder === this.itensHome){
     return; 
    } else {
      this.homeBuilder = this.itensHome;
      
      //Para cada valor trazido pelo Input:
      this.itensHome.forEach((item) => {
        
        //resolver qual componente se trata
        let componentFactory = this.componentFactoryResolver
          .resolveComponentFactory(item.component);

        //ver em qual lugar da tela (container) ele será inserido
        let homeContainerRef = this.homeRef.viewContainerRef;

        //cria componente na tela
        let componentRef = homeContainerRef.createComponent(componentFactory);

        //inserir dados que vem com o componente
        (<DadosComponent>componentRef.instance).data = item.data;

      });
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    alert(1);
    moveItemInArray(this.itensHome, event.previousIndex, event.currentIndex);
  }
}