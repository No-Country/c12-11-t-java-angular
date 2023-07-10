import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinTaccInfoComponent } from './sin-tacc-info.component';

describe('SinTaccInfoComponent', () => {
  let component: SinTaccInfoComponent;
  let fixture: ComponentFixture<SinTaccInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SinTaccInfoComponent]
    });
    fixture = TestBed.createComponent(SinTaccInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
