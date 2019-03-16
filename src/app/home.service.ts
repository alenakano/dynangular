import { 
    Injectable 
} from '@angular/core';

import { ItensHome } from './itens-home';
import { Teste02Component } from './teste02/teste02.component';
import { Teste01Component } from './teste01/teste01.component';
import { Teste03Component } from './teste03/teste03.component';

@Injectable()
export class HomeService {

  getItensHome() {
    return [
      new ItensHome(Teste01Component, {}),

      new ItensHome(Teste02Component, {}),

      new ItensHome(Teste03Component, {}),

      new ItensHome(Teste01Component, {}),
    ];
  }
  
}