import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostToursComponent } from './post-tours.component';

describe('PostToursComponent', () => {
  let component: PostToursComponent;
  let fixture: ComponentFixture<PostToursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostToursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
