import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeganInfoComponent } from './vegan-info.component';

describe('VeganInfoComponent', () => {
  let component: VeganInfoComponent;
  let fixture: ComponentFixture<VeganInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VeganInfoComponent]
    });
    fixture = TestBed.createComponent(VeganInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
