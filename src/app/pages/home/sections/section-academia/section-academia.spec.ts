import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionAcademia } from './section-academia';

describe('SectionAcademia', () => {
  let component: SectionAcademia;
  let fixture: ComponentFixture<SectionAcademia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionAcademia],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionAcademia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
