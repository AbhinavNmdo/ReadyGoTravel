import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewTourComponent } from './review-tour.component';

describe('ReviewTourComponent', () => {
  let component: ReviewTourComponent;
  let fixture: ComponentFixture<ReviewTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewTourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
