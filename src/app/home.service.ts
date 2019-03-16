import { 
    Injectable 
} from '@angular/core';

import { ItensHome } from './itens-home';
import { Teste02Component } from './teste02/teste02.component';
import { Teste01Component } from './teste01/teste01.component';
import { Teste03Component } from './teste03/teste03.component';

@Injectable()
export class HomeService {

  icones = { 
    "texto": "Aqui vai o componente 03!!", 
    "array": [
      { "icone": "text-center glyphicon glyphicon-glass", "texto": "Teste 01"},
      { "icone": "text-center glyphicon glyphicon-envelope", "texto": "Teste 01"},
      { "icone": "text-center glyphicon glyphicon-search", "texto": "Teste 01"},
      { "icone": "text-center glyphicon glyphicon-asterisk", "texto": "Teste 01"},
      { "icone": "text-center glyphicon glyphicon-plus", "texto": "Teste 01"},
      { "icone": "text-center glyphicon glyphicon-euro", "texto": "Teste 01"},
      { "icone": "text-center glyphicon glyphicon-minus", "texto": "Teste 01"},
      { "icone": "text-center glyphicon glyphicon-search", "texto": "Teste 01"},
      { "icone": "text-center glyphicon glyphicon-heart", "texto": "Teste 01"},
      { "icone": "text-center glyphicon glyphicon-star", "texto": "Teste 01"},
      { "icone": "text-center glyphicon glyphicon-film", "texto": "Teste 01"},
      { "icone": "text-center glyphicon glyphicon-th", "texto": "Teste 01"},
      { "icone": "text-center glyphicon glyphicon-road", "texto": "Teste 01"},
      { "icone": "text-center glyphicon glyphicon-download", "texto": "Teste 01"},
      { "icone": "text-center glyphicon glyphicon-flag", "texto": "Teste 01"},
      { "icone": "text-center glyphicon glyphicon-lock", "texto": "Teste 01"},
      { "icone": "text-center glyphicon glyphicon-inbox", "texto": "Teste 01"},
      { "icone": "text-center glyphicon glyphicon-home", "texto": "Teste 01"},
    ]
  }

  getItensHome() {
    return [
      new ItensHome(Teste01Component, {"texto": "Testando e funcionando o componente 01!"}),

      new ItensHome(Teste02Component, {"info": "Testando e funcionando o componente 02!!"}),

      new ItensHome(Teste03Component, this.icones ),

      new ItensHome(Teste02Component, {"info": "E as informações de cada componente são customizáveis!!!"}),
    ];
  }
  
}