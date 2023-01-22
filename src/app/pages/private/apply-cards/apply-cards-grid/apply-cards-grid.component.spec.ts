import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyCardsGridComponent } from './apply-cards-grid.component';

describe('ApplyCardsGridComponent', () => {
  let component: ApplyCardsGridComponent;
  let fixture: ComponentFixture<ApplyCardsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyCardsGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplyCardsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
