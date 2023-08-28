import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarbieComponent } from './barbie.component';

describe('BarbieComponent', () => {
  let component: BarbieComponent;
  let fixture: ComponentFixture<BarbieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarbieComponent]
    });
    fixture = TestBed.createComponent(BarbieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
