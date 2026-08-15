import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionContacto } from './section-contacto';

describe('SectionContacto', () => {
  let component: SectionContacto;
  let fixture: ComponentFixture<SectionContacto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionContacto],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionContacto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
