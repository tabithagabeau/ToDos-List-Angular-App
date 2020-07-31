import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkedCompleteComponent } from './marked-complete.component';

describe('MarkedCompleteComponent', () => {
  let component: MarkedCompleteComponent;
  let fixture: ComponentFixture<MarkedCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkedCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkedCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
