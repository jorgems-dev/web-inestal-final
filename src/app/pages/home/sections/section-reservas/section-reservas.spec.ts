import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionReservas } from './section-reservas';

describe('SectionReservas', () => {
  let component: SectionReservas;
  let fixture: ComponentFixture<SectionReservas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionReservas],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionReservas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
