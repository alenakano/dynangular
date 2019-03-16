import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteUnknownComponent } from './teste-unknown.component';

describe('TesteUnkownComponent', () => {
  let component: TesteUnknownComponent;
  let fixture: ComponentFixture<TesteUnknownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesteUnknownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteUnknownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
