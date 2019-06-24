import { 
  Component, 
  Input, 
  OnInit, 
} from '@angular/core';
import { DadosComponent } from '../dados.component';

import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-teste03',
  templateUrl: './teste03.component.html',
  styleUrls: ['./teste03.component.css']
})
export class Teste03Component implements OnInit, DadosComponent {

  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.data.array, event.previousIndex, event.currentIndex);
  }
}
