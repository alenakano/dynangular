import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Teste01Component } from './teste01.component';

describe('Teste01Component', () => {
  let component: Teste01Component;
  let fixture: ComponentFixture<Teste01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Teste01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Teste01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
