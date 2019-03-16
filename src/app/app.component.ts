import { Component } from '@angular/core';
import { HomeService } from './home.service';
import { ItensHome } from './itens-home';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'dynangular';
  public itensHome: ItensHome[];

  constructor(
    private homeService: HomeService,
  ){}

  ngOnInit(): void {
    this.itensHome = this.homeService.getItensHome();
  }

}
