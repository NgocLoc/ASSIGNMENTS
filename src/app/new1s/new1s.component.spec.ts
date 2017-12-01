import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { New1sComponent } from './new1s.component';

describe('New1sComponent', () => {
  let component: New1sComponent;
  let fixture: ComponentFixture<New1sComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ New1sComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(New1sComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
