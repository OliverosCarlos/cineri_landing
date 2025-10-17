import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Psicoterapia } from './psicoterapia';

describe('Psicoterapia', () => {
  let component: Psicoterapia;
  let fixture: ComponentFixture<Psicoterapia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Psicoterapia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Psicoterapia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
