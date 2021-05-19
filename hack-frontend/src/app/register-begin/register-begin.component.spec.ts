import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterBeginComponent } from './register-begin.component';

describe('RegisterBeginComponent', () => {
  let component: RegisterBeginComponent;
  let fixture: ComponentFixture<RegisterBeginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterBeginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterBeginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
