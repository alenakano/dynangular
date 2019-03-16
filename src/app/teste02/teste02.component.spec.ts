import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Teste02Component } from './teste02.component';

describe('Teste02Component', () => {
  let component: Teste02Component;
  let fixture: ComponentFixture<Teste02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Teste02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Teste02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
