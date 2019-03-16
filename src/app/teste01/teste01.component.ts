import { 
  Component, 
  Input, 
  OnInit, 
} from '@angular/core';
import { DadosComponent } from '../dados.component';

@Component({
  selector: 'app-teste01',
  templateUrl: './teste01.component.html',
  styleUrls: ['./teste01.component.css']
})
export class Teste01Component implements OnInit, DadosComponent {

  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
