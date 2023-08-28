import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiloystitchComponent } from './liloystitch.component';

describe('LiloystitchComponent', () => {
  let component: LiloystitchComponent;
  let fixture: ComponentFixture<LiloystitchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiloystitchComponent]
    });
    fixture = TestBed.createComponent(LiloystitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
