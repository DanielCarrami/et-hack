import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutHackComponent } from './about-hack.component';

describe('AboutHackComponent', () => {
  let component: AboutHackComponent;
  let fixture: ComponentFixture<AboutHackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutHackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutHackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
