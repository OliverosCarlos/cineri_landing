import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Neuropsicologia } from './neuropsicologia';

describe('Neuropsicologia', () => {
  let component: Neuropsicologia;
  let fixture: ComponentFixture<Neuropsicologia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Neuropsicologia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Neuropsicologia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
