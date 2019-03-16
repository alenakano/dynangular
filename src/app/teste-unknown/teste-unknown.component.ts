import { 
  Component, 
  Input,
  OnInit, 
} from '@angular/core';
import { DadosComponent } from '../dados.component';

@Component({
  selector: 'app-teste-unkown',
  templateUrl: './teste-unknown.component.html',
  styleUrls: ['./teste-unknown.component.css']
})
export class TesteUnknownComponent implements OnInit, DadosComponent {
  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
