import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialTransitionComponent } from './initial-transition.component';

describe('InitialTransitionComponent', () => {
  let component: InitialTransitionComponent;
  let fixture: ComponentFixture<InitialTransitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitialTransitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialTransitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
