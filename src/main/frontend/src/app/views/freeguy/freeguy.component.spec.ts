import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeguyComponent } from './freeguy.component';

describe('FreeguyComponent', () => {
  let component: FreeguyComponent;
  let fixture: ComponentFixture<FreeguyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreeguyComponent]
    });
    fixture = TestBed.createComponent(FreeguyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
