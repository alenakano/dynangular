import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';

import { ComponentRefDirective } from '../component-ref.directive';
import { ItensHome } from '../itens-home';

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
  public itens: any[] = [];

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
  }

  loadComponent() {

    if (this.homeBuilder === this.itensHome){
     return; 
    } else {
      this.homeBuilder = this.itensHome;
      
      //Para cada valor trazido pelo Input:
      // this.itensHome.forEach((item) => {
      //   let montagem: Montagem = new Montagem();

      //   montagem.data = item.data;

      //   //resolver qual componente se trata
      //   let componentFactory = this.componentFactoryResolver
      //     .resolveComponentFactory(item.component);
      //   montagem.component = componentFactory;
        
      //   this.itens.push(montagem);


        //ver em qual lugar da tela (container) ele será inserido
        // let homeContainerRef = this.homeRef.viewContainerRef;

        //cria componente na tela
        // let componentRef = homeContainerRef.createComponent(componentFactory);

        //inserir dados que vem com o componente
        // (<DadosComponent>componentRef.instance).data = item.data;

      // });
    }
  }

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.homeBuilder, event.previousIndex, event.currentIndex);
  }
}