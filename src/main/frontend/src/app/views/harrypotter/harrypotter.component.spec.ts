import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarrypotterComponent } from './harrypotter.component';

describe('HarrypotterComponent', () => {
  let component: HarrypotterComponent;
  let fixture: ComponentFixture<HarrypotterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HarrypotterComponent]
    });
    fixture = TestBed.createComponent(HarrypotterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
