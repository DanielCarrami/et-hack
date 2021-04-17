import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalksMentorsComponent } from './talks-mentors.component';

describe('TalksMentorsComponent', () => {
  let component: TalksMentorsComponent;
  let fixture: ComponentFixture<TalksMentorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalksMentorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TalksMentorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
