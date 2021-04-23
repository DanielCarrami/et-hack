import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorBannerComponent } from './sponsor-banner.component';

describe('SponsorBannerComponent', () => {
  let component: SponsorBannerComponent;
  let fixture: ComponentFixture<SponsorBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SponsorBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
