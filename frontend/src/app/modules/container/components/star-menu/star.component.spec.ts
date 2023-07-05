import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarsMenuComponent } from './stars-menu.component';

describe('StarsComponent', () => {
  let component: StarsMenuComponent;
  let fixture: ComponentFixture<StarsMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StarsMenuComponent]
    });
    fixture = TestBed.createComponent(StarsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
