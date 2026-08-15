import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPatrocinadores } from './section-patrocinadores';

describe('SectionPatrocinadores', () => {
  let component: SectionPatrocinadores;
  let fixture: ComponentFixture<SectionPatrocinadores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionPatrocinadores],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionPatrocinadores);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
