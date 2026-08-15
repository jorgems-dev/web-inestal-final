import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionServicios } from './section-servicios';

describe('SectionServicios', () => {
  let component: SectionServicios;
  let fixture: ComponentFixture<SectionServicios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionServicios],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionServicios);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
