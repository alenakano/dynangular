import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComposerComponent } from './home-composer.component';

describe('HomeComposerComponent', () => {
  let component: HomeComposerComponent;
  let fixture: ComponentFixture<HomeComposerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComposerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComposerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
