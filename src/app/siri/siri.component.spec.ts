import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiriComponent } from './siri.component';

describe('SiriComponent', () => {
  let component: SiriComponent;
  let fixture: ComponentFixture<SiriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
