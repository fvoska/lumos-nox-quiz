import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizCategoryItemComponent } from './quiz-category-item.component';

describe('QuizCategoryItemComponent', () => {
  let component: QuizCategoryItemComponent;
  let fixture: ComponentFixture<QuizCategoryItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizCategoryItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizCategoryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
