import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMenuMenuComponent } from './card-menu.menu.component';

describe('CardComponent', () => {
  let component: CardMenuMenuComponent;
  let fixture: ComponentFixture<CardMenuMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardMenuMenuComponent]
    });
    fixture = TestBed.createComponent(CardMenuMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
