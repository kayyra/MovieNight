import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DungeonsandragonsComponent } from './dungeonsandragons.component';

describe('DungeonsandragonsComponent', () => {
  let component: DungeonsandragonsComponent;
  let fixture: ComponentFixture<DungeonsandragonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DungeonsandragonsComponent]
    });
    fixture = TestBed.createComponent(DungeonsandragonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
