import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimulacionTemprana } from './estimulacion-temprana';

describe('EstimulacionTemprana', () => {
  let component: EstimulacionTemprana;
  let fixture: ComponentFixture<EstimulacionTemprana>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstimulacionTemprana]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstimulacionTemprana);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
