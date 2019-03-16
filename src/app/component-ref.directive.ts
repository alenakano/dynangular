import { 
  Directive,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[componentRef]'
})
export class ComponentRefDirective {

  //Diretiva para ter acesso ao containerRef e poder manipula-lo.
  constructor(
    public viewContainerRef: ViewContainerRef
  ) { }

}
