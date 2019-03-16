import { 
  Component, 
  Input, 
  OnInit, 
} from '@angular/core';
import { DadosComponent } from '../dados.component';

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

}
