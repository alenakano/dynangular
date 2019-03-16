import { 
  Component, 
  Input, 
  OnInit, 
} from '@angular/core';
import { DadosComponent } from '../dados.component';

@Component({
  selector: 'app-teste02',
  templateUrl: './teste02.component.html',
  styleUrls: ['./teste02.component.css']
})
export class Teste02Component implements OnInit, DadosComponent {

  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
