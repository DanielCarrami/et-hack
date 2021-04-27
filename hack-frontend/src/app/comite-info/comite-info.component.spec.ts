import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComiteInfoComponent } from './comite-info.component';

describe('ComiteInfoComponent', () => {
  let component: ComiteInfoComponent;
  let fixture: ComponentFixture<ComiteInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComiteInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComiteInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
