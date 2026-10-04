import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Doclogin } from './doclogin';

describe('Doclogin', () => {
  let component: Doclogin;
  let fixture: ComponentFixture<Doclogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Doclogin],
    }).compileComponents();

    fixture = TestBed.createComponent(Doclogin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
