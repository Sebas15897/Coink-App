import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyCardsComponent } from './apply-cards.component';

describe('ApplyCardsComponent', () => {
  let component: ApplyCardsComponent;
  let fixture: ComponentFixture<ApplyCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplyCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
