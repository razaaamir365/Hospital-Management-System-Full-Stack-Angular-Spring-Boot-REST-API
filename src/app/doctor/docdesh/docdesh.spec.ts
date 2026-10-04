import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Docdesh } from './docdesh';

describe('Docdesh', () => {
  let component: Docdesh;
  let fixture: ComponentFixture<Docdesh>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Docdesh],
    }).compileComponents();

    fixture = TestBed.createComponent(Docdesh);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
